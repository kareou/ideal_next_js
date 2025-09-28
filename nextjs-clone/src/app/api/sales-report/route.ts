// import { NextRequest, NextResponse } from "next/server";
// import connectDB from "@/db/mongo";
// import PaymentCase from "@/models/PaymentCase";

// export async function GET(req: NextRequest) {
//   try {
//     await connectDB();

//     const { searchParams } = new URL(req.url);
//     const from = searchParams.get("from");
//     const to = searchParams.get("to");
//     const agent = searchParams.get("agent");

//     const filter: any = {};
//     if (from) filter.SalesDate = { $gte: new Date(from) };
//     if (to) filter.SalesDate = { ...filter.SalesDate, $lte: new Date(to) };
//     if (agent && agent !== "all") filter.SalesAgent = agent;

//     const payments = await PaymentCase.find(filter).lean();

//     const aggregateStats = (statusId: number) => {
//       const clearedPayments = payments.filter(p => p.PaymentStatus === "PAID" && p.StatusId === statusId);
//       const pdPayments = payments.filter(p => p.PaymentStatus === "scheduled" && p.StatusId === statusId);
//       const declinedPayments = payments.filter(p => p.PaymentStatus === "cancelled" && p.StatusId === statusId);

//       return {
//         cleared: { total: clearedPayments.length, amount: clearedPayments.reduce((sum, p) => sum + p.Amount, 0) },
//         pd: { total: pdPayments.length, amount: pdPayments.reduce((sum, p) => sum + p.Amount, 0) },
//         declined: { total: declinedPayments.length, amount: declinedPayments.reduce((sum, p) => sum + p.Amount, 0) },
//       };
//     };

//     const p1Stats = aggregateStats(503);
//     const p2Stats = aggregateStats(543);

//     return NextResponse.json({
//       p1Cleared: p1Stats.cleared,
//       p1PD: p1Stats.pd,
//       p1Declined: p1Stats.declined,
//       p2Cleared: p2Stats.cleared,
//       p2PD: p2Stats.pd,
//       p2Declined: p2Stats.declined,
//     });
//   } catch (err: any) {
//     console.error(err);
//     return NextResponse.json({ error: err.message }, { status: 500 });
//   }
// }

// ######################################################################### ORIGINAL CODE ###########################################################################
// import { NextRequest, NextResponse } from "next/server";
// import connectDB from "@/db/mongo";
// import PaymentCase from "@/models/PaymentCase";

// export async function GET(req: NextRequest) {
//   try {
//     await connectDB();

//     const { searchParams } = new URL(req.url);
//     const from = searchParams.get("from");
//     const to = searchParams.get("to");
//     const agent = searchParams.get("agent");

//     const filter: any = {};
//     if (from) filter.SalesDate = { $gte: new Date(from) };
//     if (to) filter.SalesDate = { ...filter.SalesDate, $lte: new Date(to) };
//     if (agent && agent !== "all") filter.SalesAgent = agent;

//     const payments = await PaymentCase.find(filter).lean();

//     const aggregateStats = (statusId: number) => {
//       const clearedPayments = payments.filter(
//         (p) => p.PaymentStatus === "PAID" && p.StatusId === statusId
//       );
//       const pdPayments = payments.filter(
//         (p) => p.PaymentStatus === "scheduled" && p.StatusId === statusId
//       );
//       const declinedPayments = payments.filter(
//         (p) => p.PaymentStatus === "cancelled" && p.StatusId === statusId
//       );

//       const totalSold = clearedPayments.length + pdPayments.length;

//       return {
//         cleared: { total: clearedPayments.length, amount: clearedPayments.reduce((sum, p) => sum + p.Amount, 0) },
//         pd: { total: pdPayments.length, amount: pdPayments.reduce((sum, p) => sum + p.Amount, 0) },
//         declined: {
//           total: declinedPayments.length,
//           amount: declinedPayments.reduce((sum, p) => sum + p.Amount, 0),
//           percentage: totalSold + declinedPayments.length > 0
//             ? Math.round((declinedPayments.length / (totalSold + declinedPayments.length)) * 100)
//             : 0,
//         },
//       };
//     };

//     const p1Stats = aggregateStats(503);
//     const p2Stats = aggregateStats(543);

//     return NextResponse.json({
//       p1Cleared: p1Stats.cleared,
//       p1PD: p1Stats.pd,
//       p1Declined: p1Stats.declined,
//       p2Cleared: p2Stats.cleared,
//       p2PD: p2Stats.pd,
//       p2Declined: p2Stats.declined,
//     });
//   } catch (err: any) {
//     console.error(err);
//     return NextResponse.json({ error: err.message }, { status: 500 });
//   }
// }

// ############################################################## cancelled and declined are seperate, when a case is counted cancelled, when a case is declined ? ####################################################


import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/db/mongo";
import PaymentCase from "@/models/PaymentCase";


interface SalesAgent {
  id: string;
  name: string;
}

export async function GET(req: NextRequest) {
  try {
    await connectDB();

    const { searchParams } = new URL(req.url);
    const from = searchParams.get("from");
    const to = searchParams.get("to");
    const agent = searchParams.get("agent");

    const filter: any = {};
    if (from) filter.SalesDate = { $gte: new Date(from) };
    if (to) filter.SalesDate = { ...filter.SalesDate, $lte: new Date(to) };
    if (agent && agent !== "all") filter.SalesAgent = agent;

    const payments = await PaymentCase.find(filter).lean();

    const aggregateStats = (statusId: number) => {
      const clearedPayments = payments.filter(
        (p) => p.PaymentStatus === "PAID" && p.StatusId === statusId
      );
      const pdPayments = payments.filter(
        (p) => p.PaymentStatus === "scheduled" && p.StatusId === statusId
      );
      const cancelledPayments = payments.filter(
        (p) => p.PaymentStatus === "cancelled" && p.StatusId === statusId
      );
      const declinedPayments = payments.filter(
        (p) => p.PaymentStatus === "declined" && p.StatusId === statusId
      );

      const totalSold = clearedPayments.length + pdPayments.length;

      return {
        cleared: {
          total: clearedPayments.length,
          amount: clearedPayments.reduce((sum, p) => sum + p.Amount, 0),
        },
        pd: {
          total: pdPayments.length,
          amount: pdPayments.reduce((sum, p) => sum + p.Amount, 0),
        },
        cancelled: {
          total: cancelledPayments.length,
          amount: cancelledPayments.reduce((sum, p) => sum + p.Amount, 0),
          percentage:
            totalSold + cancelledPayments.length > 0
              ? Math.round(
                  (cancelledPayments.length / (totalSold + cancelledPayments.length)) *
                    100
                )
              : 0,
        },
        declined: {
          total: declinedPayments.length,
          amount: declinedPayments.reduce((sum, p) => sum + p.Amount, 0),
          percentage:
            totalSold + declinedPayments.length > 0
              ? Math.round(
                  (declinedPayments.length / (totalSold + declinedPayments.length)) *
                    100
                )
              : 0,
        },
      };
    };

    const p1Stats = aggregateStats(503);
    const p2Stats = aggregateStats(543);

    const allAgentsRaw = await PaymentCase.find().distinct("SalesAgent"); 
    const salesAgents: SalesAgent[] = [
      { id: "all", name: "All Agents" },
      ...allAgentsRaw.map((name) => ({ id: name, name })),
    ];


    return NextResponse.json({
      p1Cleared: p1Stats.cleared,
      p1PD: p1Stats.pd,
      p1Cancelled: p1Stats.cancelled,
      p1Declined: p1Stats.declined,
      p2Cleared: p2Stats.cleared,
      p2PD: p2Stats.pd,
      p2Cancelled: p2Stats.cancelled,
      p2Declined: p2Stats.declined,
      salesAgents
    });
  } catch (err: any) {
    console.error(err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}


// ######################################## SalesDate > today = declined || SalesDate < today = cancelled ##############################################################


// import { NextRequest, NextResponse } from "next/server";
// import connectDB from "@/db/mongo";
// import PaymentCase from "@/models/PaymentCase";

// export async function GET(req: NextRequest) {
//   try {
//     await connectDB();

//     const { searchParams } = new URL(req.url);
//     const from = searchParams.get("from");
//     const to = searchParams.get("to");
//     const agent = searchParams.get("agent");

//     const filter: any = {};
//     if (from) filter.SalesDate = { $gte: new Date(from) };
//     if (to) filter.SalesDate = { ...filter.SalesDate, $lte: new Date(to) };
//     if (agent && agent !== "all") filter.SalesAgent = agent;

//     const payments = await PaymentCase.find(filter).lean();

//     const today = new Date();
//     today.setHours(0, 0, 0, 0); 

//     const aggregateStats = (statusId: number) => {
//       const clearedPayments = payments.filter(
//         (p) => p.PaymentStatus === "PAID" && p.StatusId === statusId
//       );
//       const pdPayments = payments.filter(
//         (p) => p.PaymentStatus === "scheduled" && p.StatusId === statusId
//       );

//       const cancelledPayments = payments.filter(
//         (p) =>
//           p.PaymentStatus === "cancelled" &&
//           p.StatusId === statusId &&
//           new Date(p.SalesDate) <= today
//       );
//       const declinedPayments = payments.filter(
//         (p) =>
//           p.PaymentStatus === "cancelled" &&
//           p.StatusId === statusId &&
//           new Date(p.SalesDate) > today
//       );

//       const totalSold = clearedPayments.length + pdPayments.length;

//       return {
//         cleared: {
//           total: clearedPayments.length,
//           amount: clearedPayments.reduce((sum, p) => sum + p.Amount, 0),
//         },
//         pd: {
//           total: pdPayments.length,
//           amount: pdPayments.reduce((sum, p) => sum + p.Amount, 0),
//         },
//         cancelled: {
//           total: cancelledPayments.length,
//           amount: cancelledPayments.reduce((sum, p) => sum + p.Amount, 0),
//           percentage:
//             totalSold + cancelledPayments.length > 0
//               ? Math.round(
//                   (cancelledPayments.length / (totalSold + cancelledPayments.length)) *
//                     100
//                 )
//               : 0,
//         },
//         declined: {
//           total: declinedPayments.length,
//           amount: declinedPayments.reduce((sum, p) => sum + p.Amount, 0),
//           percentage:
//             totalSold + declinedPayments.length > 0
//               ? Math.round(
//                   (declinedPayments.length / (totalSold + declinedPayments.length)) *
//                     100
//                 )
//               : 0,
//         },
//       };
//     };

//     const p1Stats = aggregateStats(503);
//     const p2Stats = aggregateStats(543);

//     return NextResponse.json({
//       p1Cleared: p1Stats.cleared,
//       p1PD: p1Stats.pd,
//       p1Cancelled: p1Stats.cancelled,
//       p1Declined: p1Stats.declined,
//       p2Cleared: p2Stats.cleared,
//       p2PD: p2Stats.pd,
//       p2Cancelled: p2Stats.cancelled,
//       p2Declined: p2Stats.declined,
//     });
//   } catch (err: any) {
//     console.error(err);
//     return NextResponse.json({ error: err.message }, { status: 500 });
//   }
// }
