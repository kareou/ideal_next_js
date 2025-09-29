// import prisma from "@/lib/prisma";
// import bcrypt from "bcrypt";
// import { signJwt, verifyJwt } from "@/lib/utils";
// import { NextResponse } from "next/server";

// export async function POST(request: Request) {
//   const { email, password } = await request.json();
//   let user = await prisma.user.findUnique({ where: { email } });

  
//   if (!user || !(await bcrypt.compare(password, user.password))) {
//   //   user = await prisma.user.create({
//   //   data: {
//   //     email,
//   //     password: await bcrypt.hash(password, 10), // Hash the password
//   //     name: email.split('@')[0], // Default name from email
//   //   },
//   // });
//     return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
//   }

//   // Issue JWT
//   const token = await signJwt({ userId: user.id, email: user.email });
//   const response = NextResponse.json({
//     message: "Login success",
//     userId: user.id,
//   });
//   response.cookies.set("authToken", token, {
//     httpOnly: true,
//     secure: process.env.NODE_ENV === "production",
//     sameSite: "lax",
//     path: "/",
//     maxAge: 60 * 60 * 24, // 1 day
//   });
//   return response;
// }

// export async function GET(request: Request) {
//   const cookie = request.headers.get("cookie");
//   const token = cookie
//     ?.split(";")
//     .find((c) => c.trim().startsWith("authToken="))
//     ?.split("=")[1];
//   if (!token) {
//     return NextResponse.json({ error: "Unauthenticated" }, { status: 401 });
//   }
//   const payload = await verifyJwt(token);
//   if (!payload) {
//     return NextResponse.json({ error: "Unauthenticated" }, { status: 401 });
//   }
//   return NextResponse.json({ user: payload });
// }

// export async function DELETE(request: Request) {
//   const response = NextResponse.json({ message: "Logged out" });
//   response.cookies.set("authToken", "", {
//     httpOnly: true,
//     secure: process.env.NODE_ENV === "production",
//     sameSite: "lax",
//     path: "/",
//     maxAge: 0, // Expire immediately
//   });
//   return response;
// }


////////////////////////////////////// mongodb login system /////////////////////////////////import { MongoClient } from "mongodb";
import bcrypt from "bcrypt";
import { MongoClient } from "mongodb";
import { signJwt, verifyJwt } from "@/lib/utils";
import { NextResponse } from "next/server";

const MONGO_URI = process.env.MONGO_URI || "";
const MONGO_DB = process.env.MONGO_DB || "myDatabase";

if (!MONGO_URI) throw new Error("Please define MONGO_URI in .env");

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

// Ensure single MongoClient instance in dev
if (process.env.NODE_ENV === "development") {
  const globalWithMongo = global as typeof globalThis & {
    _mongoClientPromise?: Promise<MongoClient>;
  };
  if (!globalWithMongo._mongoClientPromise) {
    client = new MongoClient(MONGO_URI);
    globalWithMongo._mongoClientPromise = client.connect();
  }
  clientPromise = globalWithMongo._mongoClientPromise;
} else {
  client = new MongoClient(MONGO_URI);
  clientPromise = client.connect();
}

async function getUsersCollection() {
  const client = await clientPromise;
  const db = client.db(MONGO_DB);
  return db.collection("users");
}

// ------------------- LOGIN -------------------
export async function POST(request: Request) {
  try {
    const body = await request.json();
    console.log("Login payload:", body);

    const { name, password } = body as { name?: string; password?: string };

    if (!name || !password) {
      return NextResponse.json(
        { error: "Name and password are required" },
        { status: 400 }
      );
    }

    const users = await getUsersCollection();
    const user = await users.findOne({ name });
    console.log(user);
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
    }

    const token = await signJwt({ userId: user._id.toString(), name: user.name });
    const response = NextResponse.json({
      message: "Login success",
      userId: user._id.toString(),
    });

    response.cookies.set("authToken", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24, // 1 day
    });

    return response;
  } catch (err) {
    console.error("Login error:", err);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

// ------------------- VERIFY AUTH -------------------
export async function GET(request: Request) {
  const cookie = request.headers.get("cookie");
  const token = cookie
    ?.split(";")
    .find((c) => c.trim().startsWith("authToken="))
    ?.split("=")[1];

  if (!token) return NextResponse.json({ error: "Unauthenticated" }, { status: 401 });

  const payload = await verifyJwt(token);
  if (!payload) return NextResponse.json({ error: "Unauthenticated" }, { status: 401 });

  return NextResponse.json({ user: payload });
}

// ------------------- LOGOUT -------------------
export async function DELETE() {
  const response = NextResponse.json({ message: "Logged out" });
  response.cookies.set("authToken", "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 0,
  });
  return response;
}
