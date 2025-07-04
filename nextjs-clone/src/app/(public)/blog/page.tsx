import Blog from "@/pages/Blog";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - Ideal Tax",
  description: "Blog Get the latest news and tips directly from our professionals",
};

const page = () => {
  return <Blog />;
};

export default page;
