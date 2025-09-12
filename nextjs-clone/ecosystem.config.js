module.exports = {
  apps: [{
    name: "nextapp",
    cwd: "/Users/abdell/ideal_next_js/nextjs-clone", // your project root
    script: "node_modules/next/dist/bin/next",
    args: "start -p 3000",
    interpreter: "node",
    // env: {
    //   NODE_ENV: "production",
    //   PORT: 3000
    // },
    instances: 1,
    exec_mode: "fork",
    watch: false,
    max_memory_restart: "512M"
  }]
}