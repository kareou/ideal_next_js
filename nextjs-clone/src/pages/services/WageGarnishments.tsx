import React from "react";
import {
  Calendar,
  User,
  ArrowLeft,
} from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "What is Wage Garnishment? | Ideal",
  description:
    "Garnishing wages is the act of withholding a specific amount of money from someone’s paycheck to pay back a debt that they owe and have failed to repay. If you are experiencing wage garnishment, it means that a debt collector of some sort will be taking money from your wages until your debt is repaid.",
};

const WageGarnishments = () => {
  const solutions = [
    "Immediate wage garnishment release",
    "Negotiate affordable payment plans",
    "Protect essential living expenses",
    "Prevent future garnishment actions",
    "Financial hardship evaluation",
    "Direct IRS communication and representation",
  ];

  const garnishmentTypes = [
    {
      type: "Federal Student Loans",
      details:
        "Capped at 15% of your pay or 30 times the federal minimum wage per week. No court order required.",
    },
    {
      type: "Child Support and Alimony",
      details:
        "Up to 50-60% of disposable income can be garnished depending on your situation.",
    },
    {
      type: "Tax Debt",
      details:
        "IRS can take up to 15% without a court order, depending on deductions and dependents.",
    },
    {
      type: "Consumer Debt",
      details:
        "Up to 25% of disposable earnings, but requires a court order first.",
    },
  ];

  const yourRights = [
    "Legal notification before garnishment begins",
    "Right to dispute incorrect debt amounts",
    "Protection from job termination (for first garnishment)",
    "Certain income types are exempt (Social Security, veterans' benefits)",
    "State-specific protections may apply",
  ];

  const actionSteps = [
    {
      title: "Coordinate a Deal",
      description:
        "Contact the creditor to negotiate a payment plan instead of wage garnishment.",
    },
    {
      title: "Take it to Court",
      description:
        "Challenge the garnishment if you believe it's in error or causes undue harm.",
    },
    {
      title: "Accept and Plan",
      description:
        "If valid, work to pay off the debt as quickly as possible to minimize impact.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="pt-32 pb-16 bg-gradient-to-r from-mint-50 to-deep-blue-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/services"
              className="inline-flex items-center text-brand-teal hover:text-brand-blue transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Services
            </Link>
            <div className="mb-6">
              <span className="bg-brand-teal text-white px-3 py-1 rounded-full text-sm font-medium">
                Tax Services
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Wage Garnishment Relief
            </h1>
            <div className="flex items-center text-gray-600 mb-4">
              <div className="flex items-center mr-6">
                <User className="w-4 h-4 mr-2" />
                Tax Resolution Team
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                Emergency Service
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              What is Wage Garnishment?
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Garnishing wages is the act of withholding a specific amount of
              money from someone's paycheck to pay back a debt that they owe and
              have failed to repay. If you are experiencing wage garnishment, it
              means that a debt collector of some sort will be taking money from
              your wages until your debt is repaid.
            </p>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              The amount of money that could be taken due to wage garnishment
              will vary depending on the type of debt you owe. Many types of
              debts can only utilize wage garnishment as a tool if allowed by a
              court order. However, some types of debts such as tax debt or
              student loans do not need a judge to grant the request to garnish
              your wages.
            </p>

            <div className="bg-brand-teal/10 p-6 rounded-lg mb-8">
              <Link
                href="/survey"
                className="bg-gradient-to-r from-brand-teal to-brand-blue hover:from-brand-blue hover:to-brand-teal text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 hover:shadow-lg inline-block"
              >
                Stop Garnishment Today
              </Link>
            </div>

            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              How does wage garnishment work?
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Once a creditor gets a court order to garnish your wages, or in
              cases where a court order is not needed, the creditor will send a
              notice to your employer or your bank. Often, your employer will
              simply remove the garnishment amount during the payroll process,
              so once your wages hit your bank account, they will reflect a
              deduction due to wage garnishment.
            </p>

            <p className="text-gray-600 mb-8 leading-relaxed">
              Different debts have different requirements and stipulations
              around the percentage of your wages they can take, and the timing
              will vary depending on how much debt is owed. Your state laws will
              also impact the wage garnishment process; some states may offer
              tighter protections around limits or feature exemptions in some
              instances.
            </p>

            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Who can have their wages garnished?
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              ADP, which is a large payroll processor in the United States,
              found through a study that 7.2% of 13 million employees had
              experienced wage garnishment in 2013. Anyone who owes a debt and
              repeatedly fails to pay back that debt could have their wages
              garnished. It's important to remember that wage garnishment is
              often a last resort for most creditors; you likely will have been
              contacted many times and given the chance to repay your debt prior
              to wage garnishment.
            </p>

            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Types of Wage Garnishment
            </h3>
            <div className="space-y-6 mb-8">
              {garnishmentTypes.map((type, index) => (
                <div key={index} className="border-l-4 border-brand-teal pl-6">
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">
                    {type.type}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {type.details}
                  </p>
                </div>
              ))}
            </div>

            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Wage Garnishment for Federal Student Loans
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Student loan debt impacts millions of Americans. Its compounding
              interest often leaves borrowers owing way more than they took out,
              making it difficult to keep up with payments. If your federal
              student loans are in default because you failed to make your
              monthly payments, the U.S. Department of Education, or whatever
              agency you borrowed from, can pursue wage garnishment without a
              court order.
            </p>

            <p className="text-gray-600 mb-8 leading-relaxed">
              Student loan wage garnishment is capped at 15% of your pay or 30
              times the current federal minimum wage per week. These creditors
              are also required to send a notice 30 days before the wage
              garnishment is set to start.
            </p>

            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Wage Garnishment for Child Support and Alimony
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              In a divorce, if one person is set to make more money than their
              spouse, leaving them with a lower income, in many states, that
              person will be required to make alimony payments for a certain
              amount of time. If a couple has a child and then gets divorced,
              one parent might have to make monthly child support payments.
            </p>

            <p className="text-gray-600 mb-8 leading-relaxed">
              Federal law says that if you have a child to support who is not
              part of the court order, then up to 50% of your disposable income
              can be garnished to pay child support. If you do not have any
              children outside the one that you are paying child support for,
              then up to 60% of your disposable income can be withheld to do so.
            </p>

            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Wage Garnishment for Taxes Owed
            </h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              If you owe money to the IRS and you fail to pay it back, they will
              not waste any time before garnishing your wages. The amount the
              IRS can take will depend on your standard deduction amount and how
              many dependents you have, but as a rule of thumb, the IRS can
              usually take up to 15% and will not need a court order to do so.
            </p>

            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Court Judgments and Wage Garnishment
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Other debt types such as unpaid credit card bills, medical bills,
              or personal loans will require a court order before a creditor
              pursues wage garnishment. This process takes a bit longer because
              the creditor must first sue you in court. Only if you lose the
              lawsuit can the court grant a money judgment against you and allow
              your creditor to garnish your wages.
            </p>

            <p className="text-gray-600 mb-8 leading-relaxed">
              Federal law only allows up to 25% of your disposable earnings, or
              the amount by which your income exceeds 30 times the federal
              minimum wage, to be withheld each week.
            </p>

            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Understanding Your Rights
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              In most situations, both sides will have rights and protections,
              and garnishment is no different. Though there are rights for the
              debtor in situations impacting an employee's earnings, it is up to
              you to know about these rights and exercise them in most states.
            </p>

            <ul className="list-disc list-inside mb-8 space-y-2 text-gray-600">
              {yourRights.map((right, index) => (
                <li key={index}>{right}</li>
              ))}
            </ul>

            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              What should I do if I receive notice of wage garnishment?
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              If you get notified that your wages are going to be garnished,
              there are a few critical things to keep in mind as you navigate
              the process in front of you. Most importantly, stay calm and
              gather all the resources that you can.
            </p>

            <div className="space-y-6 mb-8">
              {actionSteps.map((step, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-brand-teal text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">
                    {index + 1}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">
                      {step.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Negative Impacts of Wage Garnishment
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Wage garnishment in and of itself can be extremely difficult to
              navigate. Having money taken from your paycheck each pay period
              can completely alter your financial situation and put you at risk
              of defaulting on other loans or paying your bills on time.
            </p>

            <p className="text-gray-600 mb-8 leading-relaxed">
              Wage garnishment probably will not show up on your credit score,
              but since wage garnishment is a result of overdue debt, that debt
              will already be impacting your credit score. In a worst-case
              scenario, wage garnishment could lead to bankruptcy.
            </p>

            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Our Wage Garnishment Solutions
            </h3>
            <ul className="list-disc list-inside mb-8 space-y-2 text-gray-600">
              {solutions.map((solution, index) => (
                <li key={index}>{solution}</li>
              ))}
            </ul>

            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Wage Garnishment is Manageable
            </h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              For most people, wage garnishment is difficult but manageable.
              Once you are done paying back your debt, your creditor will notify
              your employer and stop garnishing your wages, making it much
              easier to manage your finances each pay period. Don't let wage
              garnishment happen over and over – once is enough.
            </p>

            <div className="bg-brand-teal/10 p-6 rounded-lg mt-12">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Take Back Control of Your Income
              </h3>
              <p className="text-gray-600 mb-4">
                Every day you wait, the IRS takes more of your hard-earned
                money. Contact us immediately for wage garnishment relief.
              </p>
              <Link
                href="/survey"
                className="bg-gradient-to-r from-brand-teal to-brand-blue hover:from-brand-blue hover:to-brand-teal text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 hover:shadow-lg inline-block"
              >
                Stop Garnishment Today
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WageGarnishments;
