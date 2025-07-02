import React from "react";
import SMSTermsConditions from "@/pages/SMSTermsConditions";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "SMS Terms & Conditions - Ideal Tax",
  description: "SMS Terms & Conditions The following terms and conditions pertain to SMS text messaging promotions sponsored by Ideal Tax and affiliates that send one or more text messages to your phone. By texting to a short code or by submitting your phone number in a web form, you consent to receive one or more automated texts at",
};

function page() {
  return <SMSTermsConditions />;
}

export default page;
