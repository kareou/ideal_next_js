"use client";
import React, { useState } from "react";
import Navigation from "../components/Navigation";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "How Do You Qualify For IRS Tax Debt Forgiveness?",
      answer:
        "If you find yourself looking for tax debt forgiveness, the best thing to do is to reach out to the tax professionals at Ideal Tax Solution today. We can evaluate your specific situation and determine which debt relief programs you may qualify for based on your financial circumstances.",
    },
    {
      question: "How Much Will The IRS Usually Settle For?",
      answer:
        "In 2020, the average Offer In Compromise that the IRS approved was $16,176. However, it's essential to know that number is completely meaningless for the most part, as each case is unique and depends on your individual financial situation, ability to pay, and other factors.",
    },
    {
      question: "Who Qualifies For The IRS Fresh Start Program?",
      answer:
        "In the case of anyone with delinquent taxes, a fresh start would be the dream. The IRS Fresh Start Program is available to taxpayers who owe back taxes and meet certain criteria, including individuals and small businesses with tax debt under specific thresholds and those experiencing financial hardship.",
    },
    {
      question: "How Can I Reduce My Tax Bill?",
      answer:
        "Getting your tax bill is likely never your favorite time of the year. However, getting a bill that's not what you expected can add stress to your life and your wallet. There are several legitimate ways to reduce your tax bill, including maximizing deductions, tax credits, proper tax planning, and exploring available relief programs.",
    },
    {
      question: "Do I Need to File a Tax Return?",
      answer:
        "When tax time comes around each year, it may be a question on some people's minds. 'Do I need to file taxes this year?' Although the short answer, if you think you need to file, is likely 'yes,' there are instances where you might not actually have to file based on your income level, filing status, and age.",
    },
    {
      question: "What Happens If I File My Taxes Late?",
      answer:
        "It comes around every year like clockwork and, although we know when to expect that dreaded bill, many of us still file our taxes late. Filing taxes late can result in penalties and interest charges, and the longer you wait, the more expensive it becomes. It's important to file as soon as possible to minimize these costs.",
    },
    {
      question: "What Is Tax Fraud?",
      answer:
        "When many of us think of tax fraud, we might instinctively think about those Blockbuster movies where the corporate CEO heads off to prison for lying about how much money he made or evading taxes by sending cash to the Cayman Islands. Tax fraud involves deliberately falsifying information on tax returns to reduce tax liability, and it can result in serious legal consequences.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-deep-blue-50 to-mint-50 pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Frequently Asked{" "}
              <span className="text-brand-teal">Questions</span>
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Find answers to common questions about tax relief services and how
              IdealTax can help resolve your tax issues.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
              >
                <button
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                >
                  <span className="font-semibold text-gray-900 text-lg">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-500 transition-transform ${
                      openFAQ === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFAQ === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-brand-teal to-brand-blue">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Still Have Questions?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Our tax professionals are here to help. Contact us today for
              personalized answers to your tax questions.
            </p>
            <Button
              size="lg"
              className="bg-white text-brand-blue hover:bg-gray-100 font-semibold py-4 px-8 rounded-full transition-all duration-300 hover:shadow-lg transform hover:scale-105"
            >
              Contact Us Today
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
