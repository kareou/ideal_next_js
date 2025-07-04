import TermsOfUse from "@/pages/TermsOfUse";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms Of Use - Ideal Tax",
  description:
    "The Ideal Tax Solution, LLC application and the associated Ideal Tax Solution, LLC website available at www.idealtaxsolution.com (“Ideal Tax Solution, LLC”) are owned and operated by Ideal Tax Solution, LLC (“us” “we” or “our”). This Ideal Tax Solution, LLC Terms Of Use (the “Terms Of Use”) is intended to inform you of our policies and",
};

const Page = () => {
  return <TermsOfUse />;
};

export default Page; 