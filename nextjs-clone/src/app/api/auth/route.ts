import prisma from "@/lib/prisma";
import bcrypt from "bcrypt";
import { signJwt, verifyJwt } from "@/lib/utils";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { email, password } = await request.json();
  let user = await prisma.user.findUnique({ where: { email } });

  if (!user || !(await bcrypt.compare(password, user.password))) {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
    // user = await prisma.user.create({
    //   data: {
    //     email,
    //     password: await bcrypt.hash(password, 10), // Hash the password
    //     name: email.split('@')[0], // Default name from email
    //   },
    // });
  }

  // Issue JWT
  const token = await signJwt({ userId: user.id, email: user.email });
  const response = NextResponse.json({
    message: "Login success",
    userId: user.id,
  });
  response.cookies.set("authToken", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24, // 1 day
  });
  return response;
}

export async function GET(request: Request) {
  const cookie = request.headers.get("cookie");
  const token = cookie
    ?.split(";")
    .find((c) => c.trim().startsWith("authToken="))
    ?.split("=")[1];
  if (!token) {
    return NextResponse.json({ error: "Unauthenticated" }, { status: 401 });
  }
  const payload = await verifyJwt(token);
  if (!payload) {
    return NextResponse.json({ error: "Unauthenticated" }, { status: 401 });
  }
  return NextResponse.json({ user: payload });
}

export async function DELETE(request: Request) {
  const response = NextResponse.json({ message: "Logged out" });
  response.cookies.set("authToken", "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 0, // Expire immediately
  });
  return response;
}
