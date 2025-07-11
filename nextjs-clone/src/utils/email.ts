import axios from "axios";

export const emailValidation = async (email) => {

    const url = String(process.env.NEXT_PUBLIC_EMAIL_EP);
    console.log("Email validation URL:", url);
    try {
      const response = await axios.post(
        url,
        { email },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Email validation response:", response.data);
      if (response.status === 200) {
        return true;
      }
      return false;
    } catch (error) {
      console.error("Error validating email:", error);
      // throw error;
    }
  };

  