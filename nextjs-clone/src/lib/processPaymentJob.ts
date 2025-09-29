import { getCaseInfo, getAmortization, getPayments, updateCase, makePayments } from "./logicsApi";
import { schedulePayment, markAsProcessed, storePaymentCase, markAsFailed } from "./dbService";
import Payment from "../models/Payment";
import connectDB from "../db/mongo";
import { sendReceipt } from "./sendMail";

interface Amortization {
  ScheduledDate: string;
  Amount: any ;
}

interface CaseInfo {
  Data: {
    StatusID: number;
    [key: string]: any;
  };
}


// DECLINE MESSAGE PARSER

function parsePaymentMessage(rawMessage = "") {
  if (!rawMessage) return "Payment status unknown: No message provided.";

  const statusMatch = rawMessage.match(/Status\s*:\s*([^,]+)/i);
  const responseMatch = rawMessage.match(/Response\s*:\s*([^,]+)/i);
  const errorMatch = rawMessage.match(/Error Message\s*:\s*([^,]+)/i);

  let status = statusMatch ? statusMatch[1].trim().toUpperCase() : "UNKNOWN";
  let message = "";

  if (responseMatch && responseMatch[1].trim() !== "") {
    message = responseMatch[1].trim();
  } else if (errorMatch && errorMatch[1].trim() !== "") {
    message = errorMatch[1].trim();
  } else {
    message = rawMessage;
  }

  const msgLower = message.toLowerCase();

  if (status === "ERROR" || status === "FAILURE") {
    if (msgLower.includes("insufficient")) return "Payment declined: Insufficient funds.";
    if (msgLower.includes("expired")) return "Payment declined: Card expired.";
    if (msgLower.includes("invalid")) return "Payment declined: Invalid card or account.";
    if (msgLower.includes("limit")) return "Payment declined: Exceeds transaction limit.";
    if (msgLower.includes("fraud")) return "Payment declined: Possible fraud detected.";
    if (msgLower.includes("network")) return "Payment declined: Network error, please retry.";

    return `Payment declined: ${message}`;
  }

  if (status === "SUCCESS" || status === "APPROVED") {
    return `Payment successful: ${message}`;
  }

  return `Payment status unknown: ${message}`;
}


///////////////////////////////// MAIN PROCESSING FUNCTION //////////////////////////////////////////// 

export async function processPaymentJob(
  caseId: number,
  Source: string,
  ScheduledTime?: "immediate" | "post_date",
  ScheduledDate?: string,
  ScheduledHour?: string
) {
  
  try {

 
  await connectDB();
  console.log("MongoDB connected, starting job for case:", caseId);

  const caseInfo: CaseInfo = await getCaseInfo(caseId);
  const statusId = caseInfo.Data.StatusID;
  const setOfficer_email = caseInfo.Data.setofficerid.Email;
  // const setOfficer_email = "test@test.com"; //  teeeeeeeesting purposes !!!!! 
  const setOfficer_name = caseInfo.Data.setofficerid.Name; 
  // const setOfficer_name = "test_name"; //  teeeeeeeesting purposes !!!!! 
 ///// DONT FORGET TO REMOVE 503 - 543 ADDED FOR TEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEESTTIIIIIIIIIIIIIIINGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG //////////////////////////////////////
  const validStatuses = [479, 672, 377, 580, 565, 474, 645, 80, 389, 576, 661, 669, 667, 666, 1, 2,50];

  if (!validStatuses.includes(statusId)) {
    console.log("Case is not in correct status");
    return { status: 'not_ready_processing', message: `Case is not in correct status` };
  }

  const amortizationRes = await getAmortization(caseId);
  
  if (!amortizationRes) {
    console.warn(`CaseID ${caseId} not found on remote API`);
    return { status: 'not_found_amortization', message: `CaseID ${caseId} not found` };
  }

  const amortization: Amortization[] = amortizationRes.Data || [];

  amortization.sort((a, b) => new Date(a.ScheduledDate).getTime() - new Date(b.ScheduledDate).getTime());

  const firstPayment = amortization[0];
  if (!firstPayment) {
    console.log("No payment schedule found");
    return;
  }


  //PAYMENT GUARD
  let payments;
  try {
    payments = await getPayments(caseId);
  } catch (err: any) {
    if (err.response && err.response.status === 404) {
      console.log("No payments found, proceeding with initial payment.");
      payments = { Data: [] };
    } else {
      throw err;
    }
  }

// CHECK ARRAY IF IT CONTAINS FAILURE STATUS IN ITS PAYMENTS IF YES THEN WE CONTINUE, 
// ELSE WE RETURN "IT GOT ALREADY SUCCESSFUL PAYMENTS"

//   if (payments.Data && payments.Data.length > 0) {
//   const paidPayments = payments.Data.filter(p => p.TransactionStatus == "SUCCESS");

//   if (paidPayments.length > 0) {
//     console.log("Already has a successful payment:", paidPayments.length);
//     return {
//       status: "processed_payments",
//       message: `Already processed payments: ${paidPayments.length} for ${caseId}`,
//     };
//   }

//   console.log("Payments found, but none successful. Retrying failed ones.");
// }

// GUARD 
// WE CHECK IF ITS POST DATE, MAKING SURE SCHEDULEDDATE AND SCHEDULEDOUR WAS WELL RECEIVED THEN 

const { Amount } = firstPayment;
const amountDecimal = parseFloat(Amount);
const am = amountDecimal.toFixed(2);
console.log(Amount, am);
const today = new Date().toISOString().split("T")[0];
const dueDate = firstPayment.ScheduledDate.split("T")[0];



// if ( ScheduledTime === "post_date" && ScheduledHour  ) {
//   // const datePart = ScheduledDate.split("T")[0]; 
//   const scheduledDateTime = new Date(`${dueDate}T${ScheduledHour}:00Z`);

//   console.log(scheduledDateTime);
//   console.log("tesssssssssst", Source);

//   await schedulePayment(caseId, scheduledDateTime, Source, "scheduled", am,"Scheduled by the sales agent");
//   const seed_data = {CaseID : caseId, SalesAgent : setOfficer_name, PaymentStatus : "scheduled", Amount : am, SalesDate : scheduledDateTime, StatusId : Source};   
//   await storePaymentCase(seed_data);
//   console.log(`Stored scheduled payment for ${caseId} at ${scheduledDateTime.toISOString()}`);

//   return {
//     status: "scheduled_post_date",
//     message: `Payment scheduled on ${scheduledDateTime.toISOString().split(".")[0]} for ${caseId}`,
//   };
// }

if (ScheduledTime === "post_date" && ScheduledHour) {
  const [hours, minutes] = ScheduledHour.split(":").map(Number);

  const pstDate = new Date(dueDate);
  pstDate.setHours(hours);
  pstDate.setMinutes(minutes);
  const gmtDate = new Date(pstDate.getTime() + 8 * 60 * 60 * 1000);

  console.log("Scheduled GMT date:", gmtDate);

  await schedulePayment(caseId, gmtDate, Source, "scheduled", am, "Scheduled by the sales agent");
  const seed_data = {
    CaseID: caseId,
    SalesAgent: setOfficer_name,
    PaymentStatus: "scheduled",
    Amount: am,
    SalesDate: gmtDate,
    StatusId: Source,
  };
  await storePaymentCase(seed_data);
  console.log(`Stored scheduled payment for ${caseId} at ${gmtDate.toISOString()}`);

  return {
    status: "scheduled_post_date",
    message: `Payment scheduled on ${gmtDate.toISOString().split(".")[0]} for ${caseId}`,
  };
}


  console.log("Processing first payment for case:", caseId);


  // if (today < dueDate) {
  //   await schedulePayment(caseId, new Date(dueDate), Source,"scheduled" ,am, "Scheduled by automation");
  //   const seed_data = {CaseID : caseId, SalesAgent : setOfficer_name, PaymentStatus : "scheduled", Amount : am, SalesDate : dueDate, StatusId : Source};   
  //   await storePaymentCase(seed_data);
  //   console.log(`Scheduled for future (${dueDate})`);
  //   return { status: 'scheduled_future', message: `Scheduled for future: ${dueDate} for ${caseId}` };
  // }

  // if (today >= dueDate) {
  //   console.log("Processing payment now...");
  //   console.log(am);
    
  //   try {
      
  //     await makePayments(caseId, am); // PAYMENT FUNCTION !

  //     const paymentCheck = await getPayments(caseId);
    
  //     // console.log(paymentCheck);
  //     //----------------------------------------------------- USELESS PART ----------------------------------------------------------------------------
  //     // const latestPayment = paymentCheck.Data[0];
  //     // const latestPayment = paymentCheck.Data
  //     //     .sort((a, b) => new Date(b.CreatedDate).getTime() - new Date(a.CreatedDate).getTime())[0];
  //     //----------------------------------------------------- END USELESS PART ----------------------------------------------------------------------------

  //     console.log(paymentCheck.Data.length)
  //     const latestPayment = paymentCheck.Data[paymentCheck.Data.length - 1];
  //     // const latestPayment = {TransactionStatus : "FAILURE", TransactionComment : "testing obj"};
  //     // const latestPayment = {TransactionStatus : "SUCCESS", TransactionComment : "testing obj"};
  //     console.log(latestPayment);
  //     console.log(latestPayment?.TransactionStatus); // FAILURE || SUCCESS 
    
  //     if (latestPayment?.TransactionStatus == "SUCCESS") {
  //         await schedulePayment(caseId, new Date(dueDate), Source, "processed" , am, "scheduled + processed same day");
  //         const seed_data = {CaseID : caseId, SalesAgent : setOfficer_name, PaymentStatus : "PAID", Amount : am, SalesDate : dueDate, StatusId : Source};   
  //         await storePaymentCase(seed_data);
  //         await updateCase(caseId, Source, "Auto Activated after payment");
  //         await markAsProcessed(caseId);

  //         await sendReceipt(caseInfo, {
  //           Amount,
  //           PaidDate: today,
  //         });

  //     console.log("Case activated and payment logged");
  //     return { status: 'case_activated_pay', message: `Case activated and payment logged for ${caseId}` };
  //     } else {
  //         const decline_message = latestPayment?.TransactionComment;
  //         console.log(parsePaymentMessage(decline_message));
  //         await schedulePayment(caseId, new Date(dueDate), Source, "failed", am, decline_message);
  //         await markAsFailed(caseId, decline_message);
  //         const seed_data = {CaseID : caseId, SalesAgent : setOfficer_name, PaymentStatus : "declined", Amount : am, SalesDate : dueDate, StatusId : Source};   
  //         await storePaymentCase(seed_data);
  //         return {status : 'payment_failure', message : `Payment Declined Please RETRY ${caseId}, for the Reason ${parsePaymentMessage(decline_message) }` }
  //     }
  //   } catch(err){
  //       console.error("Error making payment:", err);
  //       return { status: 'payment_failure', message: `Payment Error for a valid ${caseId} try again !` };
  //   }   
  // } 
  } catch(err){
      console.error("Error:", err);
        return { status: 'error_app', message: `Error during processing the Case Number : ${caseId}. Please try again !` };
  }
}

