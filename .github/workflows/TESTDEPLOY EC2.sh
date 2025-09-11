sudo bash -c 'cat > /tmp/deploy_next_public.sh' <<'BASH'
#!/usr/bin/env bash
set -Eeuo pipefail

# --- CONFIG ---
APP_USER="ubuntu"
APP_ROOT="/srv/ideal_next_js"
SUBDIR="nextjs-clone"
SERVICE_NAME="ideal_next_js"
PORT="${PORT:-3000}"
REPO_URL="https://github.com/kareou/ideal_next_js.git"
BRANCH="new-ver"

echo "== Install Node 20 & Git =="
curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
apt-get update
apt-get install -y nodejs git
echo "node: $(node -v)   npm: $(npm -v)   git: $(git --version)"

echo "== Prepare app root =="
mkdir -p "${APP_ROOT}"
chown -R "${APP_USER}:${APP_USER}" "${APP_ROOT}"
cd "${APP_ROOT}"

echo "== Clone/Update code (branch: ${BRANCH}) =="
if [[ ! -d .git ]]; then
  # First time: clone then create tracking branch
  sudo -u "${APP_USER}" git clone "${REPO_URL}" .
  sudo -u "${APP_USER}" git fetch origin
  # Create/reset local branch to remote (works even if default branch != new-ver)
  sudo -u "${APP_USER}" git checkout -B "${BRANCH}" "origin/${BRANCH}"
else
  sudo -u "${APP_USER}" git remote set-url origin "${REPO_URL}"
  sudo -u "${APP_USER}" git fetch origin
  sudo -u "${APP_USER}" git checkout -B "${BRANCH}" "origin/${BRANCH}"
  sudo -u "${APP_USER}" git reset --hard "origin/${BRANCH}"
fi

echo "== Build =="
cd "${APP_ROOT}/${SUBDIR}"
# If you need ENV vars, ensure .env exists here before the build
sudo -u "${APP_USER}" npm ci
sudo -u "${APP_USER}" npm run build

echo "== Create/refresh systemd unit =="
SERVICE_PATH="/etc/systemd/system/${SERVICE_NAME}.service"
cat > "${SERVICE_PATH}" <<EOF
[Unit]
Description=${SERVICE_NAME} Next.js service
After=network.target

[Service]
Type=simple
User=${APP_USER}
WorkingDirectory=${APP_ROOT}/${SUBDIR}
Environment=NODE_ENV=production
Environment=PORT=${PORT}
Environment=PATH=/usr/local/bin:/usr/bin:/bin
ExecStart=/usr/bin/npm run start
Restart=always
RestartSec=5

[Install]
WantedBy=multi-user.target
EOF

systemctl daemon-reload
systemctl enable "${SERVICE_NAME}"
systemctl restart "${SERVICE_NAME}"

echo "== Status =="
systemctl status "${SERVICE_NAME}" --no-pager || true
echo "== Last logs =="
journalctl -u "${SERVICE_NAME}" -n 50 --no-pager || true

echo
echo "Try locally:  curl http://127.0.0.1:${PORT}/"
echo "From internet: make sure the EC2 Security Group allows TCP ${PORT} from your IP."
BASH

sudo bash /tmp/deploy_next_public.sh
