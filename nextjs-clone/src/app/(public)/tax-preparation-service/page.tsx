import React from "react";
import TaxPreparationService from "@/pages/TaxPreparationService";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get Your Tax Preparation Services Here - Ideal Tax",
  description:
"Tax preparation looks different for everyone – that’s why professional help can ensure you get the most out of filing your tax return. Contact us today to maximize your potential refund.",
};

const Page = () => {
  return <TaxPreparationService />;
};

export default Page;
