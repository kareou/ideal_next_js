import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "How Do You Qualify For IRS Tax Debt Forgiveness?",
      answer: "If you find yourself looking for tax debt forgiveness, the best thing to do is to reach out to the tax professionals at Ideal Tax today. We can evaluate your specific situation and determine which debt relief programs you may qualify for based on your financial circumstances."
    },
    {
      question: "How Much Will The IRS Usually Settle For?",
      answer: "In 2020, the average Offer In Compromise that the IRS approved was $16,176. However, it's essential to know that number is completely meaningless for the most part, as each case is unique and depends on your individual financial situation, ability to pay, and other factors."
    },
    {
      question: "Who Qualifies For The IRS Fresh Start Program?",
      answer: "In the case of anyone with delinquent taxes, a fresh start would be the dream. The IRS Fresh Start Program is available to taxpayers who owe back taxes and meet certain criteria, including individuals and small businesses with tax debt under specific thresholds."
    },
    {
      question: "What Is Tax Fraud?",
      answer: "When many of us think of tax fraud, we might instinctively think about those Blockbuster movies where the corporate CEO heads off to prison for lying about how much money he made or evading taxes. Tax fraud involves deliberately falsifying information on tax returns to reduce tax liability."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
            Got questions? We've got answers
          </h2>
        </div>

        {/* FAQ Items */}
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
                    openFAQ === index ? 'rotate-180' : ''
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

        {/* View All FAQs Button */}
        <div className="text-center mt-12">
          <Link href="/faq" className="inline-block border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold py-3 px-8 rounded-full transition-all duration-300">
            View All FAQs
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
