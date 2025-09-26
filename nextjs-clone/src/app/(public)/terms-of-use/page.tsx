import TermsOfUse from "@/pages/TermsOfUse";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms Of Use - Ideal Tax",
  description:
    "The Ideal Tax, Inc application and the associated Ideal Tax, Inc website available at www.idealtax.com (“Ideal Tax, Inc) are owned and operated by Ideal Tax, Inc (“us” “we” or “our”). This Ideal Tax, Inc Terms Of Use (the “Terms Of Use”) is intended to inform you of our policies and",
};

const Page = () => {
  return <TermsOfUse />;
};

export default Page; 