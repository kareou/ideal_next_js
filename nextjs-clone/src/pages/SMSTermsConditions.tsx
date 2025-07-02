import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const SMSTermsConditions = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-deep-blue-50 to-mint-50 pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              SMS Terms & <span className="text-brand-teal">Conditions</span>
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Terms and conditions for SMS communications and text message
              services from IdealTax.
            </p>
          </div>
        </div>
      </section>

      {/* SMS Terms Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  SMS Text Messaging Terms
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The following terms and conditions pertain to SMS text
                  messaging promotions sponsored by Ideal Tax and affiliates
                  that send one or more text messages to your phone. By texting
                  to a short code or by submitting your phone number in a web
                  form, you consent to receive one or more automated texts at
                  the phone number from which you texted or at the phone number
                  you entered in the form. Some of these automated texts may
                  market goods or services to you.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Consent and Purchase Requirements
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  No purchase is necessary in order to receive texts, nor is
                  consent to any text subscription required to purchase goods or
                  services. However, your carrier's message & data rates may
                  apply. Messages for alert subscriptions will recur. The
                  frequency of messages will vary.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Getting Help
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  For additional help, text HELP in reply to a text message you
                  receive.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Canceling SMS Subscriptions
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  To cancel your SMS subscriptions, text STOP in reply to a text
                  message you receive. You may receive a subsequent message
                  confirming your opt-out request.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Carrier Availability
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  SMS messages may be available to subscribers of your carrier.
                  Please contact your carrier for availability details.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Contact Information
                </h2>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-700 mb-2">
                    For questions about SMS services:
                  </p>
                  <p className="text-gray-700 mb-2">
                    <strong>Text HELP</strong> to any message you receive
                  </p>
                  <p className="text-gray-700 mb-2">
                    <strong>Text STOP</strong> to cancel subscriptions
                  </p>
                  <p className="text-gray-700">
                    <strong>Contact your carrier</strong> for availability
                    details
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SMSTermsConditions;
