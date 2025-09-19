import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const TermsOfUse = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* <Navigation /> */}

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-deep-blue-50 to-mint-50 pt-32 pb-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4">
              Terms of <span className="text-brand-teal">Use</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-2">
              Last updated: September 19, 2025
            </p>
            <p className="text-gray-600 text-base md:text-lg mt-2">
              Welcome to Ideal Tax Group Inc (“Ideal Tax,” “we,” “us,” or “our”). By using our Site, you agree to these Terms and our Privacy Policy.
            </p>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-10">

            {/* Section Template */}
            {[
              {
                title: "1) Who we are & what we do",
                content: "We help individuals and businesses file tax returns and enroll in IRS or state tax-relief programs (e.g., installment agreements, offers in compromise, penalty relief). Some services require a separate written engagement agreement; visiting the Site or speaking with us does not create a professional client relationship until we accept you as a client in writing."
              },
              {
                title: "2) Eligibility",
                content: "The Site is for users 18+ located in the United States. You represent you can form a binding contract and will comply with applicable law."
              },
              {
                title: "3) Changes to these Terms",
                content: "We may update these Terms at any time. Updates are effective on posting, except dispute-resolution changes won’t apply to disputes of which the parties already have actual notice. Your continued use means you accept the changes."
              },
              {
                title: "4) Access; account security; your information",
                content: "We may withdraw or modify the Site without notice and aren’t liable for any downtime. If you create an account, you must provide accurate, current, and complete information; keep credentials confidential; and notify us of any unauthorized use. We may disable any credentials at our discretion. Your use of the Site is governed by our Privacy Policy."
              },
              {
                title: "5) Permitted use; IP rights",
                content: "We grant you a limited, revocable license to use the Site for personal, non-commercial purposes. The Site, including content, design, trademarks, and software, is owned by Ideal Tax or its licensors and protected by law. You may not copy, modify, distribute, publicly display, or create derivative works except for limited personal copies as reasonably necessary for viewing and records. All rights not expressly granted are reserved."
              },
              {
                title: "6) Prohibited conduct",
                content: "You agree not to: (a) violate laws; (b) upload malicious code; (c) scrape or use bots/automated tools without permission; (d) attempt to access non-public areas; (e) impersonate others; (f) send unsolicited promotions; (g) interfere with Site operation; or (h) otherwise act in a way that harms users or the Site."
              },
              {
                title: "7) Content standards",
                content: "All materials you submit or interact with must comply with law and must not be unlawful, infringing, deceptive, hateful, harassing, or otherwise objectionable; must respect privacy and publicity rights; and must not give the impression they are endorsed by us without authorization."
              },
              {
                title: "8) User content & feedback",
                content: "If you submit questions, reviews, files, or other content (“User Content”), you grant Ideal Tax a worldwide, non-exclusive, royalty-free license to use, host, reproduce, modify, adapt, publish, and display such content to operate, improve, and market the Site and services. You represent you own or control the rights to your User Content and it’s accurate and lawful."
              },
              {
                title: "9) Informational nature of content",
                content: "Information on the Site is general and for informational purposes only; it is not tax, legal, accounting, or financial advice and should not be relied upon. Decisions affecting your taxes should be made with a qualified professional based on your particular situation. We do not guarantee completeness or timeliness and disclaim liability for reliance on Site materials."
              },
              {
                title: "10) Third-party links & tools",
                content: "The Site may link to or integrate third-party websites, tools, or portals. We do not control and are not responsible for third-party content or services; your use is at your own risk and subject to those third parties’ terms and policies."
              },
              {
                title: "11) Marketing communications & SMS consent",
                content: "If you provide a phone number (including a mobile number) or email, you agree we and our service providers may contact you regarding your inquiry, account, services, and promotions—including using automated dialing systems, prerecorded/artificial voices, and SMS/MMS texts; message/data rates may apply; message frequency varies; reply STOP to cancel and HELP for help; consent is not a condition of purchase. See our Privacy Policy and any posted SMS Terms for details."
              },
              {
                title: "12) Electronic signatures & records (E-SIGN)",
                content: "By using the Site, creating an account, or clicking to accept, you consent to transact with us electronically and to receive records, disclosures, and notices electronically at the email and/or portal we maintain for you. You can withdraw consent by contacting us (Section 23), but doing so may limit your ability to use certain services."
              },
              {
                title: "13) No guarantee of outcomes",
                content: "Eligibility for tax-relief programs is determined by the IRS or state authorities. We cannot and do not guarantee any specific result, reduction, or forgiveness amount. Past results do not predict similar outcomes."
              },
              {
                title: "14) Disclaimers",
                content: "THE SITE IS PROVIDED “AS IS” AND “AS AVAILABLE.” TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, NON-INFRINGEMENT, AND ANY WARRANTIES ARISING FROM COURSE OF DEALING OR USAGE. We do not warrant that the Site will be uninterrupted, secure, or error-free."
              },
              {
                title: "15) Limitation of liability",
                content: "TO THE FULLEST EXTENT PERMITTED BY LAW, IDEAL TAX (AND ITS OWNERS, OFFICERS, DIRECTORS, EMPLOYEES, AGENTS, AND AFFILIATES) WILL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES, OR FOR LOST PROFITS, REVENUE, DATA, OR GOODWILL, ARISING OUT OF OR RELATED TO YOUR USE OF (OR INABILITY TO USE) THE SITE, EVEN IF ADVISED OF THE POSSIBILITY. OUR TOTAL LIABILITY FOR ANY CLAIM RELATING TO THE SITE WILL NOT EXCEED THE GREATER OF $100 OR THE AMOUNTS YOU PAID (IF ANY) FOR THE ONLINE FEATURE AT ISSUE IN THE 3 MONTHS BEFORE THE CLAIM. Some jurisdictions do not allow certain limits; where they do not, these limits apply to the maximum extent permitted."
              },
              {
                title: "16) Indemnification",
                content: "You agree to defend, indemnify, and hold harmless Ideal Tax and its affiliates from and against claims, losses, liabilities, damages, costs, and expenses (including reasonable attorneys’ fees) arising out of or related to: (a) your use of the Site; (b) your User Content; (c) your violation of these Terms; or (d) your violation of law or third-party rights."
              },
              {
                title: "17) Changes to the Site",
                content: "We may update Site content periodically and are under no obligation to keep materials current."
              },
              {
                title: "18) Limitation on time to bring claims",
                content: "Any claim arising out of or related to these Terms or the Site must be filed within one (1) year after the claim accrues, or it is permanently barred, to the extent permitted by law."
              },
              {
                title: "19) Governing law; venue",
                content: "These Terms are governed by the laws of the State of California (without regard to conflicts of law). Subject to Section 20 (arbitration), the exclusive venue for disputes is the state or federal courts located in Orange County, California, and you consent to personal jurisdiction there."
              },
              {
                title: "20) Dispute resolution; binding arbitration; class-action waiver",
                content: "Read carefully—this affects your rights. You and Ideal Tax agree to resolve any dispute or claim arising out of or relating to these Terms or the Site through final and binding arbitration on an individual basis. Arbitration will be administered by JAMS (or, if JAMS is unavailable, a comparable ADR provider) under applicable rules, with a single arbitrator. The Federal Arbitration Act governs this section. You waive any right to a jury trial or to participate in class, collective, or representative proceedings. If any part of this section is found unenforceable, the remainder remains in effect (except that if class arbitration would be allowed, this section is unenforceable in full). You may opt out by emailing customercare@idealtax.com within 30 days after first accepting these Terms."
              },
              {
                title: "21) International use",
                content: "We primarily serve U.S. clients. We make no representation the Site is appropriate or available elsewhere; you’re responsible for local compliance."
              },
              {
                title: "22) Miscellaneous",
                content: "Entire agreement. These Terms (plus policies referenced here and any signed engagement agreement for paid services) form the entire agreement about Site use and supersede prior understandings. Severability. If any provision is invalid, it will be limited to the minimum necessary so the rest remains enforceable. Assignment. You may not assign these Terms without our consent; we may assign them in connection with a merger, acquisition, or asset transfer. No waiver. A failure to enforce is not a waiver. Headings are for convenience only."
              },
              {
                title: "23) Contact us",
                content: "Ideal Tax Group Inc\n240 Progress Suite 250\nIrvine, CA 92618\nEmail: customercare@idealtax.com\nPhone: 877-518-2860"
              }
            ].map((section, index) => (
              <div key={index} className="space-y-4">
                <h2 className="text-3xl md:text-3xl font-bold text-gray-900 border-l-4 border-brand-teal pl-4 mb-2">
                  {section.title}
                </h2>
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {section.content}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* <Footer /> */}
    </div>
  );
};

export default TermsOfUse;
