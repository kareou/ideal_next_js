import React from "react";
import Navigation from "../components/Navigation";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import Link from "next/link";

const ContactUs = () => {
  const contactMethods = [
    {
      icon: <Phone className="w-8 h-8 text-brand-teal" />,
      title: "Phone",
      details: "(877) 518-2860",
      description: "Speak with a tax expert today",
    },
    {
      icon: <Mail className="w-8 h-8 text-brand-teal" />,
      title: "Email",
      details: "customercare@idealtax.com",
      description: "Get a response within 24 hours",
    },
    {
      icon: <MapPin className="w-8 h-8 text-brand-teal" />,
      title: "Office",
      details: "240 Progress Suite 250 Irvine, CA 92618",
      description: "Serving clients across the United States",
    },
    {
      icon: <Clock className="w-8 h-8 text-brand-teal" />,
      title: "Hours",
      details: "Mon-Fri: 8AM-8PM EST",
      description: "Extended hours for your convenience",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-deep-blue-50 to-mint-50 pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Contact <span className="text-brand-teal">Us</span>
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Ready to resolve your tax issues? Our experienced team is here to
              help. Contact us today for your free consultation and take the
              first step toward financial freedom.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
              href="tel:8775182860"
                // size="lg"
                className="bg-gradient-to-r from-brand-teal to-brand-blue hover:from-brand-blue hover:to-brand-teal text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 hover:shadow-lg transform hover:scale-105"
              >
                Call Now: (877) 518-2860
              </Link>
              <Link
                href="/survey"
                // variant="outline"
                // size="lg"
                className="border-2  border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white py-4 px-8 rounded-full transition-all duration-300"
              >
                Get Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Multiple ways to reach our tax experts. Choose the method that
              works best for you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => (
              <div
                key={index}
                className="text-center p-6 border-2 border-gray-100 rounded-xl hover:border-brand-teal transition-all duration-300 hover:shadow-lg"
              >
                <div className="mx-auto mb-4 p-3 bg-mint-50 rounded-full w-fit">
                  {method.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {method.title}
                </h3>
                <p className="text-brand-blue font-semibold mb-2">
                  {method.details}
                </p>
                <p className="text-gray-600 text-sm">{method.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gradient-to-br from-mint-50 to-deep-blue-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Send Us a Message
              </h2>
              <p className="text-xl text-gray-700">
                Fill out the form below and we'll get back to you within 24
                hours.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <form className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-transparent"
                    placeholder="Enter your first name"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-transparent"
                    placeholder="Enter your last name"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-transparent"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-transparent"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-gray-700 font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-transparent"
                    placeholder="Tell us about your tax situation..."
                  ></textarea>
                </div>
                <div className="md:col-span-2 text-center">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-brand-teal to-brand-blue hover:from-brand-blue hover:to-brand-teal text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 hover:shadow-lg transform hover:scale-105"
                  >
                    Send Message
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-brand-teal to-brand-blue">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Don't Wait - Get Help Today
            </h2>
            <p className="text-xl text-white/90 mb-8">
              The longer you wait, the more your tax problems can grow. Contact
              us now for immediate assistance and start your journey to
              financial freedom.
            </p>
            <Link
              href="tel:8775182860"
              className="bg-white text-brand-blue hover:bg-gray-100 font-semibold py-4 px-8 rounded-full transition-all duration-300 hover:shadow-lg transform hover:scale-105"
            >
              Call (877) 518-2860 Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
