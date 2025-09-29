// import { NextResponse } from "next/server";
// import connectDB from "@/db/mongo";
// import Payment from "@/models/Payment";

// export async function POST(req: Request) {
//   try {
//     await connectDB();

//     const { CaseId, CancelType } = await req.json();

//     if (!CaseId) {
//       return NextResponse.json({ message: "CaseId is required" }, { status: 400 });
//     }

//     async function markAsCancelled(caseId: number, cancelCancelType: string) {
//             return Payment.findOneAndUpdate(
//                 { caseId, status: { $nin: ["processed", "cancelled"] } },
//                 { status: "cancelled", cancelledAt: new Date(), cancelCancelType },
//                 { new: true }
//             );
// }

//     const cancelledPayment = await markAsCancelled(CaseId, CancelType);
//     if (!cancelledPayment) {
//         return NextResponse.json({ message: "Payment not found or already processed/cancelled" }, { status: 404 });
//     }

//     return NextResponse.json({ message: "Payment cancelled successfully", data: cancelledPayment });


//   } catch (err) {
//     console.error("Webhook error:", err);
//     return NextResponse.json({ message: "Internal server error" }, { status: 500 });
//   }
// }


import { NextResponse } from "next/server";
import connectDB from "@/db/mongo";
import Payment from "@/models/Payment";
import PaymentCase from "@/models/PaymentCase";
import { getCaseInfo, getAmortization } from "@/lib/logicsApi";
import { updatePaymentCaseScheduled } from "@/lib/dbService";

export async function POST(req: Request) {
  try {
    await connectDB();

    const { CaseId, CancelType, NewHour, Reason } = await req.json();

    const caseInfo = await getCaseInfo(CaseId);
    const amortizationRes = await getAmortization(CaseId);

    const amortization = amortizationRes.Data || [];

    if (amortization.length === 0) {
      console.log(`No payment schedule found for CaseId: ${CaseId}`);
      return new Response(
        JSON.stringify({ message: "No payments scheduled", caseId: CaseId }),
        { status: 200 }
      );
    }

    const firstPayment = amortization[0];
    const full_date = firstPayment.ScheduledDate;

    const NewDate = full_date.split("T")[0];
    // const scheduledDateTime = new Date(`${NewDate}T${NewHour}:00Z`);

    const [hours, minutes] = NewHour.split(":").map(Number);

    const pstDate = new Date(NewDate);
    pstDate.setHours(hours, minutes, 0, 0);

    const scheduledDateTime = new Date(pstDate.getTime() + 8 * 60 * 60 * 1000);

    console.log("Scheduled GMT date:", scheduledDateTime);


    console.log("Scheduled DateTime:", scheduledDateTime);

    if (!CaseId) {
      return NextResponse.json({ message: "CaseId is required" }, { status: 400 });
    }

    if (!CancelType || !["cancel", "reschedule"].includes(CancelType)) {
      return NextResponse.json({ message: "Invalid CancelType" }, { status: 400 });
    }

    if (CancelType === "cancel") {
      const cancelledPayment = await Payment.findOneAndUpdate(
        { caseId: CaseId, status: { $nin: ["processed", "cancelled"] } },
        { status: "cancelled", notes : `Cancelled by the sales agent due the following reasons : ${Reason ? Reason : "Not mentioned"}` , reason : Reason , cancelledAt: new Date()},
        { new: true }
      );

      const cancelledPaymentReport = await PaymentCase.findOneAndUpdate(
        { CaseID : CaseId, PaymentStatus : {$nin : ["PAID", "cancelled"]} },
        {PaymentStatus : "cancelled"}, { new : true }
      )

      if (!cancelledPayment) {
        return NextResponse.json({ message: "Payment not found or already processed/cancelled" }, { status: 404 });
      }

      if (!cancelledPaymentReport){
        return NextResponse.json({ message: "Report modification error" }, { status: 404 });
      }

      return NextResponse.json({ message: "Payment cancelled successfully", data: cancelledPayment });
    }

    if (CancelType === "reschedule") {
      if (!NewDate || NewDate.trim() === "") {
        return NextResponse.json({ message: "New date is required for rescheduling" }, { status: 400 });
      }

      const updatedPayment = await Payment.findOneAndUpdate(
        { caseId: CaseId, status: { $nin: ["processed", "cancelled"] } },
        {
          dueDate: scheduledDateTime,
          status: "scheduled"
        },
        { new: true }
      );

      

      if (!updatedPayment) {
        return NextResponse.json({ message: "Payment not found or already processed/cancelled" }, { status: 404 });
      } else {
        await updatePaymentCaseScheduled(CaseId, scheduledDateTime);
      }

      return NextResponse.json({ message: "Payment rescheduled successfully", data: updatedPayment });
    }
  } catch (err) {
    console.error("Webhook error:", err);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}
