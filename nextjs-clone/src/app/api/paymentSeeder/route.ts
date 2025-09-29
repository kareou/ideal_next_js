import { NextRequest, NextResponse } from "next/server";
import mongoose from "mongoose";
import PaymentCase from "@/models/PaymentCase"; 
import connectDB from "@/db/mongo"; 

export async function GET(req: NextRequest) {
  try {
    await connectDB();

   const seedData: {
  CaseID: string;
  SalesAgent: string;
  PaymentStatus: "PAID" | "scheduled" | "cancelled";
  Amount: number;
  SalesDate: Date;
  StatusId: 503 | 543;
}[] = [];

const agents = ["John Smith", "Sarah Johnson", "Mike Davis", "Emily Brown", "David Lee"];
const paymentStatuses: ("PAID" | "scheduled" | "cancelled")[] = ["PAID", "scheduled", "cancelled"];

for (let i = 1; i <= 100; i++) {
  const type = Math.random() < 0.5 ? "P1" : "P2";
  const statusId = type === "P1"
    ? (Math.random() < 0.7 ? 503 : 543) 
    : (Math.random() < 0.7 ? 543 : 503); 

  const paymentStatus = paymentStatuses[Math.floor(Math.random() * paymentStatuses.length)];
  const amount = Math.floor(Math.random() * 2000) + 100; 
  const salesDate = new Date(2025, 8, Math.floor(Math.random() * 30) + 1); 

  seedData.push({
    CaseID: `C${i.toString().padStart(3, "0")}`,
    SalesAgent: agents[Math.floor(Math.random() * agents.length)],
    PaymentStatus: paymentStatus,
    Amount: amount,
    SalesDate: salesDate,
    StatusId: statusId,
  });
}

console.log(seedData);



    await PaymentCase.deleteMany({});

    for (const data of seedData) {
      const paymentCase = new PaymentCase(data);
      await paymentCase.save();
    }

    return NextResponse.json({ success: true, message: "Seed data inserted successfully!" });
  } catch (error: any) {
    console.error("Seed error:", error);
    return NextResponse.json({ success: false, error: error.message });
  }
}
