import PrivacyPolicy from "@/pages/PrivacyPolicy";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Ideal Tax",
  description:
    "Privacy Policy This privacy policy has been compiled to better serve those who are concerned with how their ‘Personally identifiable information’ (PII) is being used online. PII, as used in US privacy law and information security, is information that can be used on its own or with other information to identify, contact, or locate a",
};

const Page = () => {
  return <PrivacyPolicy />;
};

export default Page;
