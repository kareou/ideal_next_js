import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const SalesAndRefunds = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-deep-blue-50 to-mint-50 pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Sales & <span className="text-brand-teal">Refunds</span>
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Our policies regarding sales, refunds, and client obligations for
              IdealTax services.
            </p>
          </div>
        </div>
      </section>

      {/* Sales and Refunds Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Refund and Cancellation Policy
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Any Client seeking a refund or cancellation of their contract
                  must do so in writing within 48 hours of the signing of their
                  contract.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Client Responsibilities
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Clients agree to respond promptly and fully, within ten (10)
                  days, of Ideal Tax request for information or
                  documents. If Client fails to respond to Ideal Tax's
                  requests for information or documents, Ideal Tax may,
                  at its sole discretion, terminate any representation or
                  services due the Client's failure to comply to terms of the
                  signed Agreement.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Service Fees and Payment Terms
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Clients, by signing our Service Agreement, agree to pay Ideal
                  Tax fees for its services as indicated herein for the
                  representation or services provided by Ideal Tax. The
                  Fixed Fee applies to all services or representations. Clients
                  agree that the Total Fixed Fee is fully earned upon execution
                  of this Agreement.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Credit Card Payment Policy
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Client agree that if paying by Credit Card, NOT to seek a
                  refund or chargeback of the Fee charged to the Credit Card
                  under any circumstances.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Service Commitment
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Ideal Tax, upon execution of the signed Agreement,
                  agrees to provide the services, or representation, agreed upon
                  under Agreement subject only to the terms and conditions of
                  the Agreement. The services or representations to be provided
                  by Ideal Tax are listed in the Agreement provided to
                  Clients.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Contact for Questions
                </h2>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-700 mb-2">
                    For questions about our sales and refund policies:
                  </p>
                  <p className="text-gray-700 mb-2">
                    <strong>Phone:</strong> (877) 518-2860
                  </p>
                  <p className="text-gray-700 mb-2">
                    <strong>Email:</strong> customercare@idealtax.com
                  </p>
                  <p className="text-gray-700">
                    <strong>Hours:</strong> Monday-Friday, 9AM-6PM PST
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

export default SalesAndRefunds;
