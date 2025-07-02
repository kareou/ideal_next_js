"use client";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

const IrsFreshStart = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-mint-50 via-white to-deep-blue-50 pt-32">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 bg-brand-teal rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-brand-blue rounded-full blur-lg animate-pulse delay-1000"></div>
          <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-mint-200 rounded-full blur-2xl animate-pulse delay-2000"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-gray-900 animate-fade-in">
              IRS Fresh Start Program
            </h1>
            <p className="text-xl lg:text-2xl text-gray-700 mb-8 animate-fade-in delay-300">
              Find out if you qualify in less than three minutes
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in delay-500">
              <a
                href="tel:877-518-2860"
                className="inline-block bg-gradient-to-r from-brand-blue to-brand-teal hover:from-brand-teal hover:to-brand-blue text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Call Now
              </a>
              <a
                href="https://start.idealtax.com"
                className="inline-block bg-gradient-to-r from-brand-teal to-brand-blue hover:from-brand-blue hover:to-brand-teal text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Start Online Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-mint-50 to-deep-blue-50 rounded-2xl p-8 mb-16">
              <p className="text-lg text-gray-700 leading-relaxed">
                If you got this far in your search, it's most likely that you
                have a debt to the IRS that you're struggling to pay. I
                understand the stress you're dealing with, as I have personally
                experienced it myself. I promise to make it easier for you to
                understand the IRS Fresh Start Program in the simplest way
                possible and help you make an informed decision about whether
                it's the right option for you.
              </p>
            </div>

            <h2 className="text-4xl font-bold mb-8 text-gray-900">
              What Does the IRS Fresh Start Program Exactly Do?
            </h2>
            <p className="text-lg text-gray-700 mb-12 leading-relaxed">
              The IRS Fresh Start Program is specifically designed to help
              taxpayers in paying back their debt in the following steps:
            </p>

            <h3 className="text-3xl font-bold mb-8 text-gray-900">
              IRS Fresh Start Program Payment Plan Options
            </h3>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              The program provides two primary types of payment plans for
              taxpayers:
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="bg-white rounded-xl shadow-lg p-8 border border-mint-100">
                <h4 className="text-2xl font-bold mb-4 text-brand-teal">
                  Streamline Installment Plans
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  These plans are tailored for taxpayers who need an extended
                  period to pay off their tax debt. Typically, individuals can
                  make payments over an extended duration, often up to 72
                  months, and in some cases, even up to 84 months.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8 border border-deep-blue-100">
                <h4 className="text-2xl font-bold mb-4 text-brand-blue">
                  Partial Pay Installment Plans
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  Another option for taxpayers struggling to make full payments,
                  these plans allow taxpayers to make smaller, more manageable
                  payments over time. However, it's important to note that
                  interest and penalties continue to accrue.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-mint-100 to-deep-blue-100 rounded-2xl p-8 mb-16">
              <p className="text-lg text-gray-700 leading-relaxed">
                In many cases, taxpayers can significantly reduce their tax debt
                by leveraging the statute of limitations—a sort of expiration
                date for debt set by the IRS for collecting the amount owed. Our
                team of tax professionals is equipped to assist you in
                maximizing this time limit by negotiating for a lower monthly
                payment, allowing a substantial portion of your debt to expire.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Alternative Solutions Section */}
      <section className="py-20 bg-gradient-to-br from-mint-50 via-white to-deep-blue-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-gray-900 text-center">
              What If You Can't Afford a Payment Plan?
            </h2>
            <p className="text-lg text-gray-700 mb-12 text-center leading-relaxed">
              In some cases, a standard payment plan may remain out of reach.
              The IRS Fresh Start Program offers alternative solutions:
            </p>

            <div className="space-y-12">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold mb-4 text-brand-teal">
                  Offer in Compromise (OIC)
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  If you're unable to meet the requirements of a traditional
                  payment plan, the Offer in Compromise (OIC) might be your
                  ticket to tax debt freedom. OIC allows you to settle your tax
                  debt for less than the full amount owed. To qualify, you must
                  demonstrate that paying the full amount would create a
                  financial hardship. The IRS evaluates your financial
                  situation, and if you qualify, a non-refundable deposit is
                  required, typically set at 20% of your offer amount.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold mb-4 text-brand-blue">
                  Currently Non-Collectible Status
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  If making any payments on your tax debt seems impossible due
                  to severe financial limitations, Currently Non-Collectible
                  Status offers a breather. Under this status, the IRS
                  temporarily halts debt collection until your financial
                  situation improves. To be eligible, you need to show that
                  paying the full amount would put a serious financial strain on
                  you.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold mb-4 text-brand-teal">
                  Penalty Abatement
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  When paying taxes becomes a challenge, Penalty Abatement comes
                  to the rescue. It allows for the waiver of certain penalties
                  associated with your tax debt. The IRS may consider your
                  request if you can provide a valid reason for your inability
                  to pay on time, such as a serious illness or exceptional
                  circumstances.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-gray-900 text-center">
              Eligibility and Application Criteria for the IRS Fresh Start
              Program
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              To initiate the process of applying for the IRS Fresh Start
              Program and seeking financial relief, substantial evidence must be
              provided to demonstrate financial hardship. This evidence can
              encompass documents such as medical statements, insurance claims,
              or other relevant records. As part of the application process,
              it's essential to address several criteria:
            </p>

            <div className="bg-gradient-to-br from-mint-50 to-deep-blue-50 rounded-2xl p-8">
              <ul className="space-y-4 text-lg text-gray-700">
                <li className="flex items-start">
                  <span className="w-6 h-6 bg-brand-teal rounded-full flex items-center justify-center text-white text-sm font-bold mr-4 mt-1">
                    ✓
                  </span>
                  A 25% decrease in income if you are a sole proprietor.
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 bg-brand-blue rounded-full flex items-center justify-center text-white text-sm font-bold mr-4 mt-1">
                    ✓
                  </span>
                  An annual income below $100,000 (for single individuals) or
                  combined annual income below $200,000 (for married
                  individuals).
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 bg-brand-teal rounded-full flex items-center justify-center text-white text-sm font-bold mr-4 mt-1">
                    ✓
                  </span>
                  Tax debt must be less than $50,000.
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 bg-brand-blue rounded-full flex items-center justify-center text-white text-sm font-bold mr-4 mt-1">
                    ✓
                  </span>
                  Maintain a clean record with zero missed delinquent payments
                  to the IRS.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-20 bg-gradient-to-br from-mint-50 via-white to-deep-blue-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-gray-900 text-center">
              Our Clients' Success Stories
            </h2>
            <p className="text-lg text-gray-700 mb-12 text-center leading-relaxed">
              Discover how the IRS Fresh Start Program helped many of our
              clients with the assistance and guidance of our professional
              experts at Ideal Tax.
            </p>

            <div className="grid lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-bold mb-4 text-brand-teal">
                  Khan's $400k Transformation
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Khan owed the IRS $400,000 and had to deal with the threat of
                  a bank levy. After a careful look into her case, our team
                  introduced her to the IRS Fresh Start Program. We helped her
                  by placing her debt under the Non-Collectible Status option,
                  which proved to the IRS that she was genuinely unable to pay
                  her debt with her current financial situation.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-bold mb-4 text-brand-blue">
                  Zorida's Financial Journey
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  With a $251,000 debt owed to the IRS and an installment
                  agreement requiring monthly payments of $3,500, Zorida sought
                  our help. Through strategic negotiations, we successfully
                  managed to find a significant turnaround. Zorida's debt was
                  reduced to $35,000 with monthly payments lowered to $525.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-bold mb-4 text-brand-teal">
                  Ronald's $40k Burden Eased
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Faced with a significant amount of $40,000 debt to the IRS,
                  Ronald reached out to our financial professionals. Through
                  careful negotiations and strategic interventions, our team
                  managed to settle Ronald's debt for a monthly payment of $555
                  through the IRS Fresh Start Program.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Good Fit Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 text-gray-900">
              Is the Fresh Start Program a Good Fit for You?
            </h2>
            <p className="text-lg text-gray-700 mb-12 leading-relaxed">
              Curious about your chances of getting your case accepted under the
              Fresh Start Tax Program? We strongly advise that if you're facing
              tax-related challenges, now is the time to act. Reach out to us
              immediately to explore your prospects of gaining acceptance into
              this powerful program. Your journey towards financial relief
              begins today!
            </p>

            <div className="bg-gradient-to-r from-mint-100 to-deep-blue-100 rounded-2xl p-8 mb-12">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">
                Why choose Ideal Tax?
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                For over 13 years, IdealTax has been in the service for those
                dealing with financial and tax issues. Our professional team
                will help you get the best results from the IRS and also act as
                a buffer between you and the IRS so you can focus on your daily
                job. Our diverse team includes tax attorneys, federally licensed
                enrolled agents, skilled accountants who deal with hundreds of
                cases every month. As 70% of our clients are behind on IRS tax
                filing, our team has expertise in this field.
              </p>
            </div>

            <h3 className="text-3xl font-bold mb-8 text-gray-900">
              Contact us for a FREE consultation!
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:877-518-2860"
                className="inline-block bg-gradient-to-r from-brand-blue to-brand-teal hover:from-brand-teal hover:to-brand-blue text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Call Now
              </a>
              <a
                href="https://start.idealtax.com"
                className="inline-block bg-gradient-to-r from-brand-teal to-brand-blue hover:from-brand-blue hover:to-brand-teal text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Start Online Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IrsFreshStart;
