import { Metadata } from "next";
import TaxesOnStocks from "@/pages/TaxesOnStocks";


export const metadata: Metadata = {
  title: "Taxes On Stocks - Ideal Tax",
  description:
    "Learn how stocks are taxed, including capital gains, dividends, and IRS rules. Ideal Tax helps you minimize tax liability and maximize your returns with expert stock tax strategies.",
};

const Page = () => <TaxesOnStocks />;


export default Page; 
