import React from 'react';
import Navigation from '../components/Navigation';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-deep-blue-50 to-mint-50 pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Privacy <span className="text-brand-teal">Policy</span>
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Your privacy is important to us. Learn how we collect, use, and protect your personal information.
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <div className="space-y-8">
              <div>
                <p className="text-gray-700 leading-relaxed mb-6">
                  This privacy policy has been compiled to better serve those who are concerned with how their 'Personally identifiable information' (PII) is being used online. PII, as used in US privacy law and information security, is information that can be used on its own or with other information to identify, contact, or locate a single person, or to identify an individual in context. Please read our privacy policy carefully to get a clear understanding of how we collect, use, protect or otherwise handle your Personally Identifiable Information in accordance with our website.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">What personal information do we collect from the people that visit our blog, website or app?</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  When ordering or registering on our site, as appropriate, you may be asked to enter your name, email address, phone number, Tax Debt or other details to help you with your experience.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">When do we collect information?</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We collect information from you when you fill out a form or enter information on our site.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">How do we use your information?</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We may use the information we collect from you when you register, make a purchase, sign up for our newsletter, respond to a survey or marketing communication, surf the website, or use certain other site features in the following ways:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>To Personalize User's Experience And To Allow Us To Deliver The Type Of Content And Product Offerings In Which You Are Most Interested.</li>
                  <li>To Improve Our Website In Order To Better Serve You.</li>
                  <li>To Allow Us To Better Service You In Responding To Your Customer Service Requests.</li>
                  <li>To Administer A Contest, Promotion, Survey Or Other Site Feature.</li>
                  <li>To Quickly Process Your Transactions.</li>
                  <li>To Send Periodic Emails Regarding Your Order Or Other Products And Services.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">How do we protect visitor information?</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Our website is scanned on a regular basis for security holes and known vulnerabilities in order to make your visit to our site as safe as possible. We use regular Malware Scanning. Your personal information is contained behind secured networks and is only accessible by a limited number of persons who have special access rights to such systems, and are required to keep the information confidential. In addition, all sensitive/credit information you supply is encrypted via Secure Socket Layer (SSL) technology.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We implement a variety of security measures when a user places an order enters, submits, or accesses their information to maintain the safety of your personal information. For your convenience we may store your credit card information longer than 30 days in order to expedite future orders, and to automate the billing process.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Do we use 'cookies'?</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We do not use cookies for tracking purposes. You can choose to have your computer warn you each time a cookie is being sent, or you can choose to turn off all cookies. You do this through your browser (like Internet Explorer) settings. Each browser is a little different, so look at your browser's Help menu to learn the correct way to modify your cookies.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  If you disable cookies off, some features will be disabled that make your site experience more efficient and some of our services will not function properly. However, you can still place orders.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Third Party Disclosure</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information unless we provide you with advance notice. This does not include website hosting partners and other parties who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We may also release your information when we believe release is appropriate to comply with the law, enforce our site policies, or protect ours or others' rights, property, or safety. However, non-personally identifiable visitor information may be provided to other parties for marketing, advertising, or other uses.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Third party links</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We do not include or offer third party products or services on our website. Google's advertising requirements can be summed up by Google's Advertising Principles. They are put in place to provide a positive experience for users.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We have not enabled Google AdSense on our site but we may do so in the future.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">California Online Privacy Protection Act</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  CalOPPA is the first state law in the nation to require commercial websites and online services to post a privacy policy. The law's reach stretches well beyond California to require a person or company in the United States (and conceivably the world) that operates websites collecting personally identifiable information from California consumers to post a conspicuous privacy policy on its website stating exactly the information being collected and those individuals with whom it is being shared, and to comply with this policy.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  According to CalOPPA we agree to the following: Users can visit our site anonymously once this privacy policy is created, we will add a link to it on our home page, or as a minimum on the first significant page after entering our website. Our Privacy Policy link includes the word 'Privacy', and can be easily be found on the page specified above.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Users will be notified of any privacy policy changes: On Our Privacy Policy Page. Users are able to change their personal information: By Emailing Us, By Calling Us, By Chatting With Us Or Sending Us A Ticket.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Do Not Track Signals</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  How does our site handle do not track signals? We honor do not track signals and do not track, plant cookies, or use advertising when a Do Not Track (DNT) browser mechanism is in place.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Does our site allow third party behavioral tracking? It's also important to note that we allow third party behavioral tracking.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">COPPA (Children Online Privacy Protection Act)</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  When it comes to the collection of personal information from children under 13, the Children's Online Privacy Protection Act (COPPA) puts parents in control. The Federal Trade Commission, the nation's consumer protection agency, enforces the COPPA Rule, which spells out what operators of websites and online services must do to protect children's privacy and safety online.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We do not specifically market to children under 13.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Fair Information Practices</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The Fair Information Practices Principles form the backbone of privacy law in the United States and the concepts they include have played a significant role in the development of data protection laws around the globe. Understanding the Fair Information Practice Principles and how they should be implemented is critical to comply with the various privacy laws that protect personal information.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  In order to be in line with Fair Information Practices we will take the following responsive action, should a data breach occur: We will notify the users via email within 7 Business Days.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We also agree to the individual redress principle, which requires that individuals have a right to pursue legally enforceable rights against data collectors and processors who fail to adhere to the law. This principle requires not only that individuals have enforceable rights against data users, but also that individuals have recourse to courts or a government agency to investigate and/or prosecute non-compliance by data processors.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">CAN SPAM Act</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The CAN-SPAM Act is a law that sets the rules for commercial email, establishes requirements for commercial messages, gives recipients the right to have emails stopped from being sent to them, and spells out tough penalties for violations.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We collect your email address in order to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                  <li>Send Information, Respond To Inquiries, And/Or Other Requests Or Questions.</li>
                  <li>Process Orders And To Send Information And Updates Pertaining To Orders</li>
                  <li>We May Also Send You Additional Information Related To Your Product And/Or Service.</li>
                  <li>Market To Our Mailing List Or Continue To Send Emails To Our Clients After The Original Transaction Has Occurred</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mb-4">
                  To be in accordance with CANSPAM we agree to the following:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                  <li>NOT Use False, Or Misleading Subjects Or Email Addresses</li>
                  <li>Identify The Message As An Advertisement In Some Reasonable Way</li>
                  <li>Monitor Third Party Email Marketing Services For Compliance, If One Is Used</li>
                  <li>Honor Opt-Out/Unsubscribe Requests Quickly</li>
                  <li>Allow Users To Unsubscribe By Using The Link At The Bottom Of Each Email</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mb-4">
                  If at any time you would like to unsubscribe from receiving future emails, you can Follow The Instructions At The Bottom Of Each Email And We Will Promptly Remove You From ALL Correspondence.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact Information Collection</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We collect your email address and phone number in order to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                  <li>Send Information, Respond To Inquiries, And/Or Other Requests Or Questions.</li>
                  <li>Process Orders And To Send Information And Updates Pertaining To Orders</li>
                  <li>We May Also Send You Additional Information Related To Your Product And/Or Service.</li>
                  <li>Market To Our Mailing List Or Continue To Send Emails To Our Clients After The Original Transaction Has Occurred</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mb-4">
                  No mobile information will be shared with third parties/affiliates for marketing/promotional purposes. All other categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  MSG frequency varies. Msg and data rates may apply. Reply Help for help and STOP to cancel.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact Information</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  If you have any questions about this Privacy Policy, please contact us at:
                </p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-700 mb-2"><strong>Email:</strong> privacy@idealtax.com</p>
                  <p className="text-gray-700 mb-2"><strong>Phone:</strong> (877) 518-2860</p>
                  <p className="text-gray-700"><strong>Address:</strong> 240 Progress Suite 250, Irvine, CA 92618</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
