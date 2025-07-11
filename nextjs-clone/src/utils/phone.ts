import axios from "axios";

export const sendVerificationSms = async (phoneNumber : string) => {
  console.log("Sending SMS verification to:", phoneNumber);
  try {
    const response = await axios
    .post(
      String(process.env.NEXT_PUBLIC_SMS_EP),
      {
        phone: "+1" + phoneNumber, //prod
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )

      if (response.status === 200) return true;
      return false;
  } catch (error) {
    console.error("Error sending SMS verification:", error);
    return false;    
  }
};

export const validateOtp = async (phoneNumber : string, code : string) => {
  try {
    const response = await axios.post(
      String(process.env.NEXT_PUBLIC_OTP_EP),
      {
        phone: "+1" + phoneNumber, //prod
        code: code,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.status === 200) return true;
    return false;
  } catch (error) {
    throw error;
  }
};
 