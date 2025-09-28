import axios from "axios";

export async function sendReceipt(caseInfo: any, payment: any) {
  const mailOptions = {
    from: `"Ideal Tax"`,
    to: caseInfo.Data.Email,
    subject: `Payment Receipt for Case ${caseInfo.Data.CaseID}`,
    html: `
      <h3>Payment Receipt</h3>
      <p>Dear ${caseInfo.Data.FirstName} ${caseInfo.Data.LastName},</p>
      <p>We have successfully received your payment of <strong>$${payment.Amount}</strong> for your case ID <strong>${caseInfo.Data.CaseID}</strong>.</p>
      <p>Date Paid: ${new Date(payment.PaidDate).toLocaleDateString()}</p>
      <p>Thank you for your trust in Ideal Tax.</p>
      <p>— The Ideal Tax Team</p>
    `,
  };

  try {
    const res = await axios.post(
      "https://hooks.zapier.com/hooks/catch/15362467/uum492z/",
      { mailOptions }
    );

    console.log(res.data);
    console.log(`Receipt sent to ${caseInfo.Data.Email}`);
  } catch (err) {
    console.error("Failed to send receipt:", err);
    throw err;
  }
}


// export async function sendDeclineMessage(caseId: any, email : any, declineMessage : any) {
//   const mailOptions = {
//     from: `"Ideal Tax"`,
//     to: email,
//     subject: `Payment was declined for ${caseId}`,
//     html: `
//       <h3>Payment was Decline</h3>
//       <p>The Payment for case ID <strong>${caseId}</strong> was Decline Due the following reasons :</p>
//       <p>Thank you for your trust in Ideal Tax.</p>
//       <p>— The Ideal Tax Team</p>
//     `,
//   };

//   try {
//     const res = await axios.post(
//       "https://hooks.zapier.com/hooks/catch/15362467/uum492z/",
//       { mailOptions }
//     );

//     console.log(res.data);
//     console.log(`Decline message sent to ${email}`);
//   } catch (err) {
//     console.error("Failed to send receipt:", err);
//     throw err;
//   }
// }
