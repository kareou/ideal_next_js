"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  ChevronRight,
  ChevronLeft,
  Phone,
  Mail,
  DollarSign,
  FileText,
  User,
  Briefcase,
  Users,
  AlertCircle,
} from "lucide-react";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import { emailValidation } from "@/utils/email";
import { sendVerificationSms, validateOtp } from "@/utils/phone";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { MdErrorOutline } from "react-icons/md";
import { CiCircleCheck } from "react-icons/ci";
import { useRouter } from 'next/navigation';

interface FormData {
  email: string;
  phone: string;
  firstName: string;
  lastName: string;
  taxDebt: string;
  state: string;
  unfiledYears: string;
  taxType: string;
  filingStatus: string;
  income: string;
  owesBackTaxes: boolean;
  receivedNotices: boolean;
  agreedToTerms: boolean;
}

interface UTMParams {
  utm_medium: string | null;
  utm_content: string | null;
  gclid: string | null;
  fbclid: string | null;
  utm_term: string | null;
  adgroup: string | null;
}

const SurveyForm = () => {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const searchParams = useSearchParams();
  const [showOTPInput, setShowOTPInput] = useState(false);
  const [otpValue, setOtpValue] = useState("");
  const [emailStatus, setEmailStatus] = useState<"valid" | "invalid" | "checking"| "">(
    ""
  );
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isOtpValid, setIsOtpValid] = useState(false);

  const [isPhoneVerified, setIsPhoneVerified] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    email: "",
    phone: "",
    firstName: "",
    lastName: "",
    taxDebt: "",
    state: "",
    unfiledYears: "",
    taxType: "",
    filingStatus: "",
    income: "",
    owesBackTaxes: false,
    receivedNotices: false,
    agreedToTerms: false,
  });
  const [utmParams, setUtmParams] = useState<UTMParams>({
    utm_medium: searchParams?.get("utm_medium") || "idealtax_website",
    utm_content: searchParams?.get("utm_content") || null,
    gclid: searchParams?.get("gclid") || null,
    fbclid: searchParams?.get("fbclid") || null,
    utm_term: searchParams?.get("utm_term") || null,
    adgroup: searchParams?.get("adgroup") || null,
  });

  const totalSteps = 7;

  const handleVerifyOTP = async () => {
    console.log("Verifying OTP:", otpValue);
    try {
      const cleaned = formData.phone.replace(/[()\s-]/g, "");
      console.log("Verifying OTP for phone:", cleaned);
      const response = await validateOtp(cleaned, otpValue);
      if (response) {
        setIsPhoneVerified(true);
        setIsOtpValid(true);
        setShowOTPInput(false);
        setOtpValue("");
        console.log("OTP verified successfully");
      }
      console.log("OTP verification response:", response);
    } catch (error) {}
  };

  const updateFormData = (field: keyof FormData, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSendSMSVerification = async () => {
    const cleaned = formData.phone.replace(/[()\s-]/g, "");
    console.log("Sending SMS verification to:", cleaned);
    try {
      const response = await sendVerificationSms(cleaned);
      console.log("SMS verification sent:", response);
      if (response) setShowOTPInput(true);
    } catch (error) {
      console.error("Error sending SMS verification:", error.message || error);
    }
  };

  const handleChangeNumber = () => {
    setIsPhoneVerified(false);
    setShowOTPInput(false);
    setOtpValue("");
    updateFormData("phone", "");
  };

  const formatPhoneNumber = (value: string) => {
    // Remove all non-numeric characters
    const phoneNumber = value.replace(/[^\d]/g, "");

    // Limit to 10 digits
    const truncated = phoneNumber.slice(0, 10);

    // Format as (XXX) XXX-XXXX
    if (truncated.length >= 6) {
      return `(${truncated.slice(0, 3)}) ${truncated.slice(
        3,
        6
      )}-${truncated.slice(6)}`;
    } else if (truncated.length >= 3) {
      return `(${truncated.slice(0, 3)}) ${truncated.slice(3)}`;
    } else if (truncated.length > 0) {
      return `(${truncated}`;
    }

    return truncated;
  };

  const isValidPhoneNumber = (phone: string) => {
    // Check if phone number has exactly 10 digits
    const digitsOnly = phone.replace(/[^\d]/g, "");
    return digitsOnly.length === 10;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value);
    updateFormData("phone", formatted);

    // Check if phone number is valid and auto-show verification
    if (isValidPhoneNumber(formatted)) {
      setIsPhoneVerified(true);
    } else {
      setIsPhoneVerified(false);
    }
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return formData.taxDebt !== "" && formData.taxDebt !== "under-5k";
      case 2:
        return formData.state !== "";
      case 3:
        return formData.unfiledYears !== "";
      case 4:
        return formData.taxType !== "";
      case 5:
        return (
          formData.firstName.trim() !== "" && formData.lastName.trim() !== ""
        );
      case 6:
        return formData.filingStatus !== "";
      case 7:
        console.log("isPhoneVerified:", isPhoneVerified);
        return isOtpValid && isEmailValid;
      default:
        return true;
    }
  };

  const nextStep = () => {
    if (currentStep < totalSteps && isStepValid()) {
      setCurrentStep(currentStep + 1);
    }
  };

  const getUserIP = async () => {
    try {
      const response = await axios.get(String(process.env.NEXT_PUBLIC_IP_EP));
      return response.data.ip;
    } catch (error) {
      console.error("Error fetching user IP:", error);
      return "Unknown IP";
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async () => {
    console.log("Form submitted:", formData);
    const userIP = await getUserIP();
    const leadData = {
      FNAME: formData.firstName,
      LNAME: formData.lastName,
      EMAIL: formData.email,
      CELL_PHONE: formData.phone,
      STATE: formData.state,
      LEAD_PROVIDER_ID: "Weblead",
      DISTRIBUTIONID: 21,
      UDF130: utmParams.utm_medium,
      UDF88: utmParams.utm_content,
      UDF142: utmParams.gclid,
      UDF153: utmParams.fbclid,
      UDF90: utmParams.utm_term,
      UDF89: utmParams.adgroup,
      UDF119: userIP,
      NOTES: JSON.stringify({
        HelpWith: "Unfiled Tax Returns Liability",
        Liability: formData.taxDebt,
        Type: formData.taxType,
        Years_unfilled: formData.unfiledYears,
        Filing_status: formData.filingStatus,
      }),
    };
    try {
      console.log("Submitting lead data:", leadData);
      const response = await axios.post(
        String(process.env.NEXT_PUBLIC_CRM_EP),
        leadData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      router.push(`/confirmation/${response.data._id}`);
    } catch (error: unknown) {
      console.error("Error submitting lead:", error?.message || error);
    }
    // Handle form submission
  };

  const renderProgressBar = () => (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-2">
        {Array.from({ length: totalSteps }, (_, i) => (
          <div
            key={i}
            className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
              i + 1 <= currentStep
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-600"
            }`}
          >
            {i + 1 <= currentStep ? "✓" : i + 1}
          </div>
        ))}
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className="bg-blue-600 h-2 rounded-full transition-all duration-300"
          style={{ width: `${(currentStep / totalSteps) * 100}%` }}
        ></div>
      </div>
    </div>
  );

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                <DollarSign className="w-8 h-8 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold mb-2 text-gray-900">
                How much tax debt do you want eliminated?
              </h2>
              <p className="text-gray-600">
                Select how much tax debt the IRS claims you owe
              </p>
            </div>

            <div className="space-y-4">
              <Select
                value={formData.taxDebt}
                onValueChange={(value) => updateFormData("taxDebt", value)}
              >
                <SelectTrigger className="w-full h-12 text-left">
                  <SelectValue placeholder="Select..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="under-5k">UNDER $4,999</SelectItem>
                  <SelectItem value="5k-10k">$5,000 - $9,999</SelectItem>
                  <SelectItem value="10k-20k">$10,000 - $19,999</SelectItem>
                  <SelectItem value="20k-50k">$20,000 - $49,999</SelectItem>
                  <SelectItem value="50k-100k">$50,000 - $99,999</SelectItem>
                  <SelectItem value="100k-plus">$100,000 OR MORE</SelectItem>
                </SelectContent>
              </Select>

              {formData.taxDebt === "under-5k" && (
                <div className="flex items-center gap-3 p-4 bg-orange-50 border border-orange-200 rounded-lg">
                  <AlertCircle className="w-5 h-5 text-orange-600 flex-shrink-0" />
                  <p className="text-sm text-orange-800">
                    You need to owe $5,000 or more in tax debt to qualify for
                    our tax relief programs. Please select a higher amount to
                    proceed.
                  </p>
                </div>
              )}
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-2 text-gray-900">
                What state do you live in?
              </h2>
              <p className="text-gray-600">Select your state of residence</p>
            </div>

            <div className="space-y-4">
              <Select
                value={formData.state}
                onValueChange={(value) => updateFormData("state", value)}
              >
                <SelectTrigger className="w-full h-12 text-left">
                  <SelectValue placeholder="Select..." />
                </SelectTrigger>
                <SelectContent className="max-h-60">
                  <SelectItem value="alabama">Alabama</SelectItem>
                  <SelectItem value="alaska">Alaska</SelectItem>
                  <SelectItem value="american-samoa">American Samoa</SelectItem>
                  <SelectItem value="arizona">Arizona</SelectItem>
                  <SelectItem value="arkansas">Arkansas</SelectItem>
                  <SelectItem value="california">California</SelectItem>
                  <SelectItem value="colorado">Colorado</SelectItem>
                  <SelectItem value="connecticut">Connecticut</SelectItem>
                  <SelectItem value="delaware">Delaware</SelectItem>
                  <SelectItem value="district-of-columbia">
                    District Of Columbia
                  </SelectItem>
                  <SelectItem value="federated-states-of-micronesia">
                    Federated States Of Micronesia
                  </SelectItem>
                  <SelectItem value="florida">Florida</SelectItem>
                  <SelectItem value="georgia">Georgia</SelectItem>
                  <SelectItem value="guam">Guam</SelectItem>
                  <SelectItem value="hawaii">Hawaii</SelectItem>
                  <SelectItem value="idaho">Idaho</SelectItem>
                  <SelectItem value="illinois">Illinois</SelectItem>
                  <SelectItem value="indiana">Indiana</SelectItem>
                  <SelectItem value="iowa">Iowa</SelectItem>
                  <SelectItem value="kansas">Kansas</SelectItem>
                  <SelectItem value="kentucky">Kentucky</SelectItem>
                  <SelectItem value="louisiana">Louisiana</SelectItem>
                  <SelectItem value="maine">Maine</SelectItem>
                  <SelectItem value="marshall-islands">
                    Marshall Islands
                  </SelectItem>
                  <SelectItem value="maryland">Maryland</SelectItem>
                  <SelectItem value="massachusetts">Massachusetts</SelectItem>
                  <SelectItem value="michigan">Michigan</SelectItem>
                  <SelectItem value="minnesota">Minnesota</SelectItem>
                  <SelectItem value="mississippi">Mississippi</SelectItem>
                  <SelectItem value="missouri">Missouri</SelectItem>
                  <SelectItem value="montana">Montana</SelectItem>
                  <SelectItem value="nebraska">Nebraska</SelectItem>
                  <SelectItem value="nevada">Nevada</SelectItem>
                  <SelectItem value="new-hampshire">New Hampshire</SelectItem>
                  <SelectItem value="new-jersey">New Jersey</SelectItem>
                  <SelectItem value="new-mexico">New Mexico</SelectItem>
                  <SelectItem value="new-york">New York</SelectItem>
                  <SelectItem value="north-carolina">North Carolina</SelectItem>
                  <SelectItem value="north-dakota">North Dakota</SelectItem>
                  <SelectItem value="northern-mariana-islands">
                    Northern Mariana Islands
                  </SelectItem>
                  <SelectItem value="ohio">Ohio</SelectItem>
                  <SelectItem value="oklahoma">Oklahoma</SelectItem>
                  <SelectItem value="oregon">Oregon</SelectItem>
                  <SelectItem value="palau">Palau</SelectItem>
                  <SelectItem value="pennsylvania">Pennsylvania</SelectItem>
                  <SelectItem value="puerto-rico">Puerto Rico</SelectItem>
                  <SelectItem value="rhode-island">Rhode Island</SelectItem>
                  <SelectItem value="south-carolina">South Carolina</SelectItem>
                  <SelectItem value="south-dakota">South Dakota</SelectItem>
                  <SelectItem value="tennessee">Tennessee</SelectItem>
                  <SelectItem value="texas">Texas</SelectItem>
                  <SelectItem value="utah">Utah</SelectItem>
                  <SelectItem value="vermont">Vermont</SelectItem>
                  <SelectItem value="virgin-islands">Virgin Islands</SelectItem>
                  <SelectItem value="virginia">Virginia</SelectItem>
                  <SelectItem value="washington">Washington</SelectItem>
                  <SelectItem value="west-virginia">West Virginia</SelectItem>
                  <SelectItem value="wisconsin">Wisconsin</SelectItem>
                  <SelectItem value="wyoming">Wyoming</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                <FileText className="w-8 h-8 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold mb-2 text-gray-900">
                How many unfiled years do you have?
              </h2>
            </div>

            <div className="space-y-4">
              <Select
                value={formData.unfiledYears}
                onValueChange={(value) => updateFormData("unfiledYears", value)}
              >
                <SelectTrigger className="w-full h-12 text-left">
                  <SelectValue placeholder="Select..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0">0</SelectItem>
                  <SelectItem value="1">1</SelectItem>
                  <SelectItem value="2">2</SelectItem>
                  <SelectItem value="3">3</SelectItem>
                  <SelectItem value="4">4</SelectItem>
                  <SelectItem value="5">5</SelectItem>
                  <SelectItem value="6">6</SelectItem>
                  <SelectItem value="7">7</SelectItem>
                  <SelectItem value="8">8</SelectItem>
                  <SelectItem value="9">9</SelectItem>
                  <SelectItem value="10">10</SelectItem>
                  <SelectItem value="11">11</SelectItem>
                  <SelectItem value="12">12</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-2 text-gray-900">
                Is this for personal or business taxes?
              </h2>
              <p className="text-gray-600">(Select at least one option)</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div
                className={`border-2 rounded-lg p-6 cursor-pointer transition-all ${
                  formData.taxType === "personal"
                    ? "border-blue-600 bg-blue-50"
                    : "border-gray-300 hover:border-gray-400"
                }`}
                onClick={() => updateFormData("taxType", "personal")}
              >
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                    <User className="w-8 h-8 text-gray-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900">Personal</h3>
                </div>
              </div>

              <div
                className={`border-2 rounded-lg p-6 cursor-pointer transition-all ${
                  formData.taxType === "business"
                    ? "border-blue-600 bg-blue-50"
                    : "border-gray-300 hover:border-gray-400"
                }`}
                onClick={() => updateFormData("taxType", "business")}
              >
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                    <Briefcase className="w-8 h-8 text-gray-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900">Business</h3>
                </div>
              </div>

              <div
                className={`border-2 rounded-lg p-6 cursor-pointer transition-all ${
                  formData.taxType === "both"
                    ? "border-blue-600 bg-blue-50"
                    : "border-gray-300 hover:border-gray-400"
                }`}
                onClick={() => updateFormData("taxType", "both")}
              >
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-8 h-8 text-gray-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900">
                    Personal & Business
                  </h3>
                </div>
              </div>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                <User className="w-8 h-8 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold mb-2 text-gray-900">
                What's your first and last name?
              </h2>
              <p className="text-gray-600">
                We will need your full name. Middlename is not required.
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <Input
                  value={formData.firstName}
                  onChange={(e) => updateFormData("firstName", e.target.value)}
                  placeholder="First name"
                  className="h-12 border-gray-300"
                  required
                />
              </div>

              <div>
                <Input
                  value={formData.lastName}
                  onChange={(e) => updateFormData("lastName", e.target.value)}
                  placeholder="Last name"
                  className="h-12 border-gray-300"
                  required
                />
              </div>
            </div>
          </div>
        );

      case 6:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                <User className="w-8 h-8 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold mb-2 text-gray-900">
                What is your most recent filing status?
              </h2>
            </div>

            <div className="space-y-4">
              <Select
                value={formData.filingStatus}
                onValueChange={(value) => updateFormData("filingStatus", value)}
              >
                <SelectTrigger className="w-full h-12 text-left">
                  <SelectValue placeholder="Select..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="single">Single</SelectItem>
                  <SelectItem value="head-household">
                    Head of Household
                  </SelectItem>
                  <SelectItem value="married-joint">
                    Married Filing Jointly
                  </SelectItem>
                  <SelectItem value="married-separate">
                    Married Filing Separately
                  </SelectItem>
                  <SelectItem value="dont-know">I don't know</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        );

      case 7:
        return (
          <div className="space-y-6">
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4 text-gray-900">
                If you qualify, one of our Tax Analysts will need to reach you
                to confirm your Tax Relief Application
              </h2>
              <p className="text-gray-600 mb-4">Enter your contact details</p>
              <p className="text-sm text-gray-500">
                This info is needed only for the purposes of this application.
                We don't like spam either.
              </p>
            </div>

            <div className="space-y-6">
              <div className="relative">
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => {
                    const email = e.target.value;
                    if (email.trim() === "") {
                      setEmailStatus("");
                    }
                    updateFormData("email", email);
                  }}
                  placeholder="Email"
                  onBlur={async (e) => {
                    if (!e.target.value || e.target.value.trim() === "") return;
                    setEmailStatus("checking");
                    const isValid = await emailValidation(e.target.value);
                    if (!isValid) {
                      setEmailStatus("invalid");
                    }else {
                      setIsEmailValid(true);
                      setEmailStatus("valid");
                      
                    }
                  }}
                  className="h-12 border-gray-300"
                  required
                />
                <div className="absolute top-1/2 right-3 transform -translate-y-1/2">
                
                
                {emailStatus === "checking" && (
                  <div className="w-4 h-4 border-2 border-gray-500 border-t-transparent rounded-full animate-spin"></div> 
                )}
                {emailStatus === "valid" && (
                  <CiCircleCheck className="text-green-600"/> 
                )}
                {emailStatus === "invalid" && (
                  <MdErrorOutline className="text-red-500"/>
                )}
                </div>
              </div>

              <div>
                {!isPhoneVerified ? (
                  <Input
                    type="tel"
                    value={formData.phone}
                    onChange={handlePhoneChange}
                    placeholder="Phone number"
                    className="h-12 border-gray-300"
                    maxLength={14}
                  />
                ) : (
                  <div className="space-y-4">
                    <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg">
                      <p className="text-sm text-gray-600 mb-2">
                        For your security, a verification code will be sent to
                        your number to verify ownership.
                      </p>
                      <p className="font-semibold text-gray-900 mb-4">
                        {formData.phone}
                      </p>

                      {!showOTPInput ? (
                        <div className="flex gap-3">
                          <Button
                            onClick={handleSendSMSVerification}
                            className="bg-blue-600 hover:bg-blue-700 text-white"
                          >
                            Send SMS Verification
                          </Button>
                          <Button
                            variant="outline"
                            onClick={handleChangeNumber}
                            className="border-gray-300 text-gray-700 hover:bg-gray-50"
                          >
                            Change Number
                          </Button>
                        </div>
                      ) : (
                        <div className="space-y-4">
                          <div>
                            <Label className="text-sm font-medium text-gray-700 mb-2 block">
                              Enter verification code
                            </Label>
                            <InputOTP
                              value={otpValue}
                              onChange={setOtpValue}
                              maxLength={6}
                            >
                              <InputOTPGroup>
                                <InputOTPSlot index={0} />
                                <InputOTPSlot index={1} />
                                <InputOTPSlot index={2} />
                                <InputOTPSlot index={3} />
                                <InputOTPSlot index={4} />
                                <InputOTPSlot index={5} />
                              </InputOTPGroup>
                            </InputOTP>
                          </div>

                          <div className="flex gap-3">
                            <Button
                              onClick={handleVerifyOTP}
                              disabled={otpValue.length !== 6}
                              className="bg-green-600 hover:bg-green-700 text-white disabled:opacity-50"
                            >
                              Verify Code
                            </Button>
                            <Button
                              variant="outline"
                              onClick={handleChangeNumber}
                              className="border-gray-300 text-gray-700 hover:bg-gray-50"
                            >
                              Change Number
                            </Button>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="p-8 lg:p-12 h-full flex flex-col justify-center">
      <Card className="max-w-2xl mx-auto w-full">
        <CardHeader>{renderProgressBar()}</CardHeader>

        <CardContent>
          {renderStep()}

          <div className="flex justify-between mt-8">
            <Button
              variant="outline"
              onClick={prevStep}
              disabled={currentStep === 1}
              className="flex items-center gap-2"
            >
              <ChevronLeft className="w-4 h-4" />
              Previous
            </Button>

            {(currentStep < totalSteps)
            ? (
              <Button
                onClick={nextStep}
                disabled={!isStepValid()}
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next
                <ChevronRight className="w-4 h-4" />
              </Button>
            ) : (
              <Button
                onClick={handleSubmit}
                disabled={!isStepValid()}
                className="bg-green-600 hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Submit Application
              </Button>
            )}
          </div>

          {/* Contact options */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-center text-gray-600 mb-4">
              Prefer to speak with someone directly?
            </p>
            <div className="flex justify-center gap-4">
              <Button variant="outline" className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                Call Now
              </Button>
              <Button variant="outline" className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Email Us
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SurveyForm;
