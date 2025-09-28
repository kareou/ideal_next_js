//   import { NextResponse } from "next/server";
// import connectDB from "@/db/mongo"; // Mongo connection
// import { processPaymentJob } from "@/lib/processPaymentJob";

// export async function POST(req: Request) {
//   try {
//     await connectDB();

//     const { CaseId, Source } = await req.json();

//     if (!CaseId) {
//       return NextResponse.json({ message: "XXXXX missing caseId XXXXX" }, { status: 400 });
//     }

//     console.log(CaseId, Source);
//     const result = await processPaymentJob(Number(CaseId), Source);

//     if (result?.status === 'not_found_amortization') {
//       return NextResponse.json({ message: result.message }, { status: 404 });
//     }

//     if (result?.status === 'processed_payments') {
//       return NextResponse.json({ message: result.message }, { status: 409 });
//     }

//     if (result?.status === 'scheduled_future') {
//       return NextResponse.json({ message: result.message }, { status: 201 });
//     }

//     if (result?.status === 'case_activated_pay') {
//       return NextResponse.json({ message: result.message }, { status: 202 });
//     }

//     if (result?.status === 'payment_error') {
//       return NextResponse.json({ message: result.message }, { status: 405 });
//     }

//     if (result?.status === 'not_ready_processing') {
//       return NextResponse.json({ message: result.message }, { status: 406 });
//     }

//     if (result?.status === 'not_ready_processing') {
//       return NextResponse.json({ message: result.message }, { status: 406 });
//     }

//     if (result?.status === 'payment_failure') {
//       return NextResponse.json({ message: result.message }, { status: 407 });
//     }


//     return NextResponse.json({ message: "Webhook processed successfully" }, { status: 200 });
//   } catch (err) {
//     console.error("Webhook error:", err);
//     return NextResponse.json({ message: "Internal server error" }, { status: 500 });
//   }
// }


import { NextResponse } from "next/server";
import connectDB from "@/db/mongo";
import { processPaymentJob } from "@/lib/processPaymentJob";

export async function POST(req: Request) {
  try {
    await connectDB();

    const { CaseId, Source, ScheduledTime, ScheduledDate,ScheduledHour } = await req.json();

    if (!CaseId) {
      return NextResponse.json({ message: "Missing CaseId" }, { status: 400 });
    }

    const result = await processPaymentJob(
        Number(CaseId),
        Source,
        ScheduledTime,
        ScheduledDate,
        ScheduledHour
      );

    switch (result?.status) {
      case 'not_found_amortization':
        return NextResponse.json({ message: result.message }, { status: 404 });

      case 'processed_payments':
        return NextResponse.json({ message: result.message }, { status: 409 });

      case 'scheduled_future':
        return NextResponse.json({ message: result.message }, { status: 201 });

      case 'case_activated_pay':
        return NextResponse.json({ message: result.message }, { status: 202 });

      case 'payment_error':
        return NextResponse.json({ message: result.message }, { status: 405 });

      case 'not_ready_processing':
        return NextResponse.json({ message: result.message }, { status: 406 });

      case 'payment_failure':
        return NextResponse.json({ message: result.message }, { status: 402 });
      case 'scheduled_post_date':
        return NextResponse.json({ message: result.message }, { status: 403 });

      case 'error_app':
        return NextResponse.json({ message: result.message }, { status: 408 });
      default:
        return NextResponse.json({ message: "Payment processed successfully" }, { status: 200 });
    }
  } catch (err) {
    console.error("Webhook error:", err);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}
