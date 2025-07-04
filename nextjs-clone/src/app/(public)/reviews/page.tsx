import Reviews from "@/pages/Reviews";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ideal Tax Reviews - Real Testimonials & Experiences",
  description:
    "Check out our testimonials and experiences from past and existing clients. We've collected reviews from trusted sources such as Google, BBB and Trust Pilot.",
};

const Page = () => {
  return <Reviews />;
};

export default Page;
