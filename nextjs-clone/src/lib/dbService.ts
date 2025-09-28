import Payment from "../models/Payment";
import PaymentCase, { IPaymentCase } from "../models/PaymentCase";
import { Types } from "mongoose";

// export async function schedulePayment(caseId: number, dueDate: Date, source: string, am : string, notes = "") {
//   console.log("test caseid schedule payment", caseId, am);
//   return Payment.create({ caseId, dueDate, amount : am , notes, source });
// }

export async function schedulePayment(
  caseId: number,
  dueDate: Date,
  source: any,
  status : any,
  am: string,
  notes = ""
) {
  console.log("test caseid schedule payment", caseId, am);

  try {
    const existingPayment = await Payment.findOne({ caseId });

    if (existingPayment) {
      existingPayment.dueDate = dueDate;
      existingPayment.amount = am;
      existingPayment.notes = notes;
      existingPayment.status = status as any;
      existingPayment.source = source as any;

      await existingPayment.save();
      console.log(`Updated existing payment for caseId ${caseId}`);
      return existingPayment;
    } else {
      const newPayment = await Payment.create({ caseId, dueDate, amount: am, notes, source, status });
      console.log(`Created new payment for caseId ${caseId}`);
      return newPayment;
    }
  } catch (err) {
    console.error(`Error scheduling payment for caseId ${caseId}:`, err);
    throw err;
  }
}


export async function markAsProcessed(caseId: number) {
  return Payment.findOneAndUpdate(
    { caseId },
    { status: "processed", processedAt: new Date() },
    { new: true }
  );
}

export async function markAsFailed(caseId: number, notes = "") {
  return Payment.findOneAndUpdate(
    { caseId },
    { status: "declined", notes, $inc: { attempts: 1 } },
    { new: true }
  );
}

export async function getDuePayments(today: string | Date) {
  return Payment.find({ dueDate: today, status: "scheduled" });
}



// export async function storePaymentCase(data: any): Promise<IPaymentCase> {
//   try {
//     let statusId: number | undefined;


//       if (data.Source !== "P2") {
//         statusId = 503;
//       } else {
//         statusId = 543;
//       }
    

//     const newCase = new PaymentCase({
//       CaseID: data.CaseID,
//       SalesAgent: data.SalesAgent,
//       PaymentStatus: data.PaymentStatus,
//       Amount: data.Amount,
//       SalesDate: new Date(data.SalesDate),
//       StatusId: statusId, 
//     });

//     return await newCase.save();
//   } catch (error) {
//     console.error("Error saving payment case:", error);
//     throw error;
//   }
// }


export async function storePaymentCase(data: any): Promise<IPaymentCase> {
  try {
    let statusId: number | undefined;
    console.log("Incoming data:", data);
    const source: any = data.StatusId || data.StatusId;

    console.log("source:", source);

    console.log(source);
    if (source != "P2") {
      statusId = 503;
    } else {
      statusId = 543;
    }

    const existingCase = await PaymentCase.findOne({ CaseID: data.CaseID });

    if (existingCase) {
      existingCase.SalesAgent = data.SalesAgent;
      existingCase.PaymentStatus = data.PaymentStatus;
      existingCase.Amount = data.Amount;
      existingCase.SalesDate = new Date(data.SalesDate);
      existingCase.StatusId = statusId;

      await existingCase.save();
      console.log(`Updated existing payment case for CaseID ${data.CaseID}`);
      return existingCase;
    } else {
      const newCase = new PaymentCase({
        CaseID: data.CaseID,
        SalesAgent: data.SalesAgent,
        PaymentStatus: data.PaymentStatus,
        Amount: data.Amount,
        SalesDate: new Date(data.SalesDate),
        StatusId: statusId,
      });

      const savedCase = await newCase.save();
      console.log(`Created new payment case for CaseID ${data.CaseID}`);
      return savedCase;
    }
  } catch (error) {
    console.error("Error saving payment case:", error);
    throw error;
  }
}



export async function updatePaymentCaseScheduled(
  CaseId: number,
  scheduledDateTime: Date
): Promise<IPaymentCase | null> {
  try {
    const updateData = {
      PaymentStatus: "scheduled",
      SalesDate: scheduledDateTime,
    };

    const updatedCase = await PaymentCase.findOneAndUpdate(
      { CaseID: CaseId },
      { $set: updateData },
      { new: true } 
    );

    if (updatedCase) {
      console.log(`Updated CaseID ${CaseId} with scheduled payment`);
    } else {
      console.log(`No payment case found with CaseID ${CaseId}`);
    }

    return updatedCase;
  } catch (err) {
    console.error(`Error updating scheduled payment for CaseID ${CaseId}:`, err);
    throw err;
  }
}

