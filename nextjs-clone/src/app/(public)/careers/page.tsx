import React from "react";

import Careers from "@/pages/Careers";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers - Ideal Tax",
  description:
    "Careers Ideal Tax is proud to be an equal opportunity workplace and is an affirmative action employer. Join our Talent Network!Get the latest updates on our job openings and employee insight! You can expect stories from our employees, useful career tips, invites to our career & talent networking events, and much more! Fill In:",
};

const Page = () => {
  return <Careers />;
};

export default Page;
