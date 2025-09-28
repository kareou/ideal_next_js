import axios from "axios";

const BASE_URL = "https://ideal.logics.com/publicapi/V3";
const authHeader = process.env.LOGICS_KEY;

interface CaseInfoResponse {
  Data: {
    StatusID: number;
    [key: string]: any;
  };
}

interface AmortizationItem {
  ScheduledDate: string;
  Amount: number;
  [key: string]: any;
}

interface AmortizationResponse {
  Data: AmortizationItem[];
}

interface PaymentResponse {
  Data: any[];
}

export async function getCaseInfo(caseId: number): Promise<CaseInfoResponse> {
  const res = await axios.get(`${BASE_URL}/Case/CaseInfo?CaseID=${caseId}&details=setofficerid`, {
    headers: { Authorization: authHeader },
  });
  return res.data;
}
  
export async function getAmortization(caseId: number) {
  try {
    const res = await axios.get(`${BASE_URL}/Billing/CaseAmortization?CaseID=${caseId}`, {
      headers: { Authorization: authHeader },
    });
    return res.data;
  } catch (err: any) {
    if (err.response?.status === 404) {
      console.error(`CaseID ${caseId} not found on remote API`);
      return null; 
    }
    throw err; 
  }
}


export async function getPayments(caseId: number): Promise<PaymentResponse> {
  const res = await axios.get(`${BASE_URL}/Billing/CasePayment?CaseID=${caseId}`, {
    headers: { Authorization: authHeader },
  });
  return res.data;
}

export async function makePayments(caseId: number, amount: any, comment = "Paid via the Automation") {
  try {
    const body = {
      CaseID: caseId,
      Amount: amount,
      Comment: comment,
    };

    const res = await axios.post(`${BASE_URL}/Billing/CasePayment`, body, {
      headers: { Authorization: authHeader },
    });

    return res.data;
  } catch (err: any) {
    console.error("Payment request failed:", err.response?.data || err.message);
    throw err;
  }
}


export async function updateCase(caseId: number, Source: string, notes = "Auto Update") {
  let statusId: number;

  if (Source !== "P2") {
    statusId = 503;
  } else {
    statusId = 543;
  }

  const res = await axios.post(`${BASE_URL}/UpdateCase/UpdateCase`, {
    CaseId: caseId,
    StatusId: statusId,
    Notes: notes,
  }, 
  {
  headers: { Authorization: authHeader },
});

  return res.data;
}
