"use client";
import React, { useState } from "react";
import Navigation from "../components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle, Users, Briefcase, Heart } from "lucide-react";
import Link from "next/link";
import { useToast } from "@/hooks/use-toast";

const Careers = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    positionOfInterest: "",
  });

  const { toast } = useToast();

  const benefits = [
    "Competitive salary and benefits",
    "Professional development opportunities",
    "Flexible work arrangements",
    "Collaborative team environment",
    "Health and wellness programs",
    "Career advancement opportunities",
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast({
      title: "Application Submitted",
      description: "Thank you for your interest! We'll be in touch soon.",
    });
    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      positionOfInterest: "",
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Why Work With Us */}
      <section className="py-20 bg-white pt-32">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Why Work at IdealTax?
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                At IdealTax, we believe in empowering our team members to grow
                both professionally and personally. Join us in making a real
                difference in people's lives while building your career.
              </p>
              <div className="space-y-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-brand-teal mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-mint-100 to-deep-blue-100 rounded-2xl p-8 text-center">
              <Heart className="w-16 h-16 text-brand-teal mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Great Culture
              </h3>
              <p className="text-gray-700">
                We foster a supportive, inclusive environment where every team
                member can thrive and contribute to our mission of helping
                taxpayers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Join Our Talent Network Form */}
      <section className="py-20 bg-gradient-to-br from-mint-50 to-deep-blue-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left side - Job posting style info */}
              <div>
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <h3 className="text-2xl font-bold text-brand-teal mb-4">
                    Servicing Manager, Tax Resolution
                  </h3>
                  <div className="space-y-2 mb-6">
                    <p className="text-gray-700">
                      <span className="font-semibold">Location:</span> IRVINE,
                      CA
                    </p>
                    <p className="text-gray-700">
                      <span className="font-semibold">Department:</span>{" "}
                      Servicing
                    </p>
                  </div>
                  <Button className="bg-brand-teal hover:bg-brand-teal/90 text-white px-6 py-2 rounded-md">
                    + VIEW DETAILS
                  </Button>
                </div>
              </div>

              {/* Right side - Join Talent Network Form */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-3xl font-bold text-gray-900 mb-4 italic">
                  Join our Talent Network!
                </h3>
                <p className="text-gray-700 mb-6">
                  Get the latest updates on our job openings and employee
                  insight! You can expect stories from our employees, useful
                  career tips, invites to our career & talent networking events,
                  and much more!
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-gray-700">
                      Fill In:
                    </Label>
                    <Label htmlFor="name" className="text-gray-700">
                      First & Last name
                    </Label>
                    <div className="grid grid-cols-2 gap-4">
                      <Input
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="border-gray-300"
                      />
                      <Input
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        className="border-gray-300"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-700">
                      Your email
                    </Label>
                    <Input
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="border-gray-300"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="positionOfInterest"
                      className="text-gray-700"
                    >
                      Position of interest
                    </Label>
                    <Textarea
                      name="positionOfInterest"
                      placeholder="Tell us about the position you're interested in..."
                      value={formData.positionOfInterest}
                      onChange={handleInputChange}
                      className="border-gray-300 min-h-[100px]"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="bg-black hover:bg-gray-800 text-white px-8 py-3 rounded-md font-semibold"
                  >
                    SUBMIT
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-brand-teal to-brand-blue">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Join Our Team?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Take the next step in your career and become part of our mission
              to help taxpayers achieve financial freedom.
            </p>
           <Button
  asChild
  size="lg"
  className="bg-white text-brand-blue hover:bg-gray-100 font-semibold py-4 px-8 rounded-full transition-all duration-300 hover:shadow-lg transform hover:scale-105"
>
  <Link href="/survey">
    Apply Today
  </Link>
</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
