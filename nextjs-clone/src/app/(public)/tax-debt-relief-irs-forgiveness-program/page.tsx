import React from "react";
import TaxDebtReliefIrsForgiveness from "@/pages/TaxDebtReliefIrsForgiveness";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "IRS Forgiveness Program V0 - Ideal Tax",
  description:
    "IRS Forgiveness Program Find out if you qualify in less than three minutes Call Now Start Online Now Share : If you still owe money to the IRS and you can’t pay it right away, this situation can be stressful. I’m going to simplify this so you can determine if you’ll be able to benefit",
};

function page() {
  return <TaxDebtReliefIrsForgiveness />;
}

export default page;
