import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Calendar, User, ArrowLeft } from "lucide-react";
import Link from "next/link";

const WorkOpportunityCredit = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="pt-32 pb-16 bg-gradient-to-r from-mint-50 to-deep-blue-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/"
              className="inline-flex items-center text-brand-teal hover:text-brand-blue transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
            <div className="mb-6">
              <span className="bg-brand-teal text-white px-3 py-1 rounded-full text-sm font-medium">
                Tax Credits
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Work Opportunity Credit Explained
            </h1>
            <div className="flex items-center text-gray-600 mb-4">
              <div className="flex items-center mr-6">
                <User className="w-4 h-4 mr-2" />
                Credit Specialists
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                August 17, 2025
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <p className="text-xl text-gray-600 mb-8">
              The Work Opportunity Tax Credit (WOTC) is a federal tax credit
              offered by the IRS to employers who hire individuals from certain
              targeted groups that face significant barriers to employment.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Purpose of WOTC
            </h2>
            <p className="mb-6">
              WOTC incentivizes employers to hire workers from groups that
              historically face employment challenges, helping these individuals
              gain valuable work experience while providing employers with tax
              savings.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Qualifying Target Groups
            </h2>
            <p className="mb-6">
              Employees must be from one of these target groups:
            </p>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li>TANF (Temporary Assistance for Needy Families) recipients</li>
              <li>Veterans (including disabled veterans)</li>
              <li>Ex-felons hired within one year of conviction or release</li>
              <li>SNAP (food stamp) recipients (ages 18-39)</li>
              <li>Summer youth employees (ages 16-17) from high-crime areas</li>
              <li>Vocational rehabilitation referrals</li>
              <li>Qualified long-term unemployment recipients</li>
              <li>SSI recipients</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Credit Amounts
            </h2>
            <p className="mb-6">
              The credit varies by target group and hours worked:
            </p>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li>
                Generally 25% of first-year wages up to $6,000 (maximum $1,500
                credit)
              </li>
              <li>
                40% of first-year wages if employee works 400+ hours (maximum
                $2,400 credit)
              </li>
              <li>Special rates for veterans and certain other groups</li>
              <li>
                Summer youth: 25% of first-year wages up to $3,000 (maximum $750
                credit)
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Eligibility Requirements
            </h2>
            <p className="mb-6">To claim WOTC, employers must:</p>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li>Obtain certification from state workforce agency</li>
              <li>Submit Form 8850 within 28 days of employee's start date</li>
              <li>
                Have employee complete IRS Form 8850 and ETA Form 9061/9062
              </li>
              <li>Ensure employee meets target group requirements</li>
              <li>Meet minimum hours worked requirements</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Application Process
            </h2>
            <p className="mb-6">
              The WOTC application process involves several steps:
            </p>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li>
                Pre-screen potential employees for target group membership
              </li>
              <li>Complete and submit required forms within deadlines</li>
              <li>Wait for state workforce agency certification</li>
              <li>Claim credit on business tax return using Form 5884</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Benefits for Employers and Employees
            </h2>
            <p className="mb-6">WOTC provides mutual benefits:</p>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li>Employers receive significant tax savings</li>
              <li>Access to motivated workers from underserved populations</li>
              <li>Employees gain valuable work experience and income</li>
              <li>Communities benefit from reduced unemployment</li>
            </ul>

            <div className="bg-brand-teal/10 p-6 rounded-lg mt-12">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Need Help with WOTC?
              </h3>
              <p className="text-gray-600 mb-4">
                Maximizing the Work Opportunity Tax Credit requires proper
                documentation and timely filing. Our business tax specialists
                can help you navigate the process.
              </p>
              <Link
                href="/survey"
                className="no-underline bg-gradient-to-r from-brand-teal to-brand-blue hover:from-brand-blue hover:to-brand-teal text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 hover:shadow-lg inline-block"
              >
                Get Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkOpportunityCredit;
