// // import { NextResponse } from "next/server";
// // import  prisma  from "@/lib/prisma";
// // import bcrypt from "bcrypt";


// // export async function POST(req: Request) {
// //   try {
// //     const body = await req.json();
// //     const { email, password } = body;

// //     if (!email || !password) {
// //       return NextResponse.json(
// //         { error: "Email and password are required" },
// //         { status: 400 }
// //       );
// //     }

// //     const existingUser = await prisma.user.findUnique({ where: { email } });
// //     if (existingUser) {
// //       return NextResponse.json(
// //         { error: "User already exists" },
// //         { status: 409 }
// //       );
// //     }

// //     const hashedPassword = await bcrypt.hash(password, 10);

// //     const user = await prisma.user.create({
// //       data: {
// //         email,
// //         password: hashedPassword,
// //         name: email.split("@")[0], 
// //       },
// //     });

// //     return NextResponse.json(
// //       {
// //         id: user.id,
// //         email: user.email,
// //         name: user.name,
// //       },
// //       { status: 201 }
// //     );
// //   } catch (err) {
// //     console.error(err);
// //     return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
// //   }
// // }


// import { NextResponse } from "next/server";
// import prisma from "@/lib/prisma";
// import bcrypt from "bcrypt";

// export async function POST(req: Request) {
//   try {
//     const body = await req.json();
//     const { name, password } = body as { name?: string; password?: string };

//     if (!name || !password) {
//       return NextResponse.json(
//         { error: "Name and password are required" },
//         { status: 400 }
//       );
//     }

//     // Check if user already exists by name
//     const existingUser = await prisma.user.findUnique({
//       where: { name },
//     });

//     if (existingUser) {
//       return NextResponse.json(
//         { error: "User already exists" },
//         { status: 409 }
//       );
//     }

//     // Hash password
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // Create user
//     const user = await prisma.user.create({
//       data: {
//         name,
//         password: hashedPassword,
//       },
//     });

//     return NextResponse.json(
//       {
//         id: user.id,
//         name: user.name,
//       },
//       { status: 201 }
//     );
//   } catch (err) {
//     console.error("User creation error:", err);
//     return NextResponse.json(
//       { error: "Internal Server Error" },
//       { status: 500 }
//     );
//   }
// }

//// multiple users //// 

// import { NextResponse } from "next/server";
// import prisma from "@/lib/prisma";
// import bcrypt from "bcrypt";

// export async function POST(req: Request) {
//   try {
//     const body = await req.json(); // now can be an array
//     if (!Array.isArray(body)) {
//       return NextResponse.json(
//         { error: "Expected an array of users" },
//         { status: 400 }
//       );
//     }

//     const createdUsers = [];

//     for (const user of body) {
//       const { name, password } = user;
//       if (!name || !password) continue; // skip invalid entries

//       const existingUser = await prisma.user.findUnique({ where: { name } });
//       if (existingUser) continue; // skip existing users

//       const hashedPassword = await bcrypt.hash(password, 10);

//       const newUser = await prisma.user.create({
//         data: { name, password: hashedPassword },
//       });

//       createdUsers.push({ id: newUser.id, name: newUser.name });
//     }

//     return NextResponse.json({ created: createdUsers }, { status: 201 });
//   } catch (err) {
//     console.error("User creation error:", err);
//     return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
//   }
// }


////mongodb 

import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";
import bcrypt from "bcrypt";

const MONGO_URI = process.env.MONGO_URI || "";
const MONGO_DB = process.env.MONGO_DB || "paymentdb";

if (!MONGO_URI) throw new Error("Please define MONGO_URI in .env");

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

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

export async function POST(req: Request) {
  try {
    const body = await req.json();
    if (!Array.isArray(body)) {
      return NextResponse.json({ error: "Expected an array of users" }, { status: 400 });
    }

    const createdUsers: { id: string; name: string }[] = [];
    const usersCollection = await getUsersCollection();

    for (const user of body) {
      const { name, password } = user;
      if (!name || !password) continue; 

      const existingUser = await usersCollection.findOne({ name });
      if (existingUser) continue;

      const hashedPassword = await bcrypt.hash(password, 10);

      const result = await usersCollection.insertOne({ name, password: hashedPassword });
      createdUsers.push({ id: result.insertedId.toString(), name });
    }

    return NextResponse.json({ created: createdUsers }, { status: 201 });
  } catch (err) {
    console.error("User creation error:", err);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}


