import TermsOfUse from "@/pages/TermsOfUse";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms Of Use - Ideal Tax",
  description:
    "The Ideal Tax, LLC application and the associated Ideal Tax, LLC website available at www.idealtax.com (“Ideal Tax, LLC”) are owned and operated by Ideal Tax, LLC (“us” “we” or “our”). This Ideal Tax, LLC Terms Of Use (the “Terms Of Use”) is intended to inform you of our policies and",
};

const Page = () => {
  return <TermsOfUse />;
};

export default Page; 