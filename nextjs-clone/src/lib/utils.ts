import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { SignJWT, jwtVerify } from 'jose';

const JWT_SECRET = process.env.JWT_SECRET || 'changemechangemechangemechangeme'; // Should be 32+ chars in production

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export async function signJwt(payload: object, expiresIn = '1h') {
  const secret = new TextEncoder().encode(JWT_SECRET);
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setExpirationTime(expiresIn)
    .sign(secret);
}

export async function verifyJwt(token: string) {
  try {
    const secret = new TextEncoder().encode(JWT_SECRET);
    const { payload } = await jwtVerify(token, secret);
    return payload;
  } catch (e) {
    return null;
  }
}
