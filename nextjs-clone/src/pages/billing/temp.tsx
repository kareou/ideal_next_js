"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Alert, AlertDescription } from "@/components/ui/alert";
import FloatingContact from "../../components/MainLanderComponents/HeaderContacts";
import Box1 from "../../components/MainLanderComponents/HeroContactBox";
import { CheckCircle, XCircle, Clock, CreditCard, LogOut } from "lucide-react";
import Navbar from "../../components/MainLanderComponents/Navbar";
import Footer from "../../components/MainLanderComponents/Footer";
import { useRouter } from "next/navigation";

interface FormData {
  CaseId: string;
  Source: "P2" | "P1";
  ScheduledTime: "immediate" | "post_date";
  ScheduledDate?: string;
  ScheduledHour?: string;
}

interface ResultData {
  status: "success" | "declined" | "processing";
  message: string;
  details: string;
}

const PaymentHandlerForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    CaseId: "",
    Source: "P2",
    ScheduledTime: "immediate",
    ScheduledDate: "",
    ScheduledHour: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<ResultData | null>(null);
  const [error, setError] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      await new Promise((resolve) => setTimeout(resolve, 100));
      const isLoggedIn = localStorage.getItem("isAdminLoggedIn");
      if (isLoggedIn === "true") setIsAuthenticated(true);
      else {
        setIsAuthenticated(false);
        router.replace("/admin/login");
      }
    };
    checkAuth();
  }, [router]);

  if (isAuthenticated === null)
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-gray-700">Checking authentication...</div>
      </div>
    );
  if (isAuthenticated === false) return null;

  const handleLogout = () => {
    localStorage.removeItem("isAdminLoggedIn");
    router.replace("/admin/login");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setResult(null);

    if (!formData.CaseId.trim()) {
      setError("Case ID is required");
      return;
    }

    // if (
    //   formData.ScheduledTime === "post_date" &&
    //   (!formData.ScheduledDate || formData.ScheduledDate.trim() === "")
    // ) {
    //   setError("Please choose a date for post-dated payment");
    //   return;
    // }

    if (formData.ScheduledTime === "post_date") {
        if (!formData.ScheduledDate || formData.ScheduledDate.trim() === "") {
          setError("Please choose a date for post-dated payment");
          return;
        }

        if (!formData.ScheduledHour || formData.ScheduledHour.trim() === "") {
          setError("Please choose an hour for post-dated payment");
          return;
        }

        const selectedDateTime = new Date(`${formData.ScheduledDate}T${formData.ScheduledHour}:00`);
        const now = new Date();

        if (selectedDateTime < now) {
          setError("Scheduled date and time cannot be in the past");
          return;
        }
      }

    setIsLoading(true);

    try {
      console.log(
        "testtt submit:", formData.CaseId, formData.Source,
        formData.ScheduledTime,
        formData.ScheduledDate, formData.ScheduledHour
      );

      const response = await fetch("/api/paymentHandler", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          CaseId: formData.CaseId.trim(),
          Source: formData.Source,
          ScheduledTime: formData.ScheduledTime,
          ScheduledDate:
            formData.ScheduledTime === "post_date"
              ? formData.ScheduledDate
              : null,
          ScheduledHour :  formData.ScheduledTime === "post_date"
              ? formData.ScheduledHour
              : null
        }),
      });

      const data = await response.json().catch(() => ({}));

      if (response.ok || response.status === 201 || response.status === 202) {
        setResult({
          status: "success",
          message: data.message || "Payment processed successfully!",
          details: "Receipt has been sent to the client.",
        });
      } else if (response.status === 400) {
        setError(data.message || "Bad request - Invalid Case ID");
      } else if (response.status === 402) {
        setResult({
          status: "declined",
          message: data.message || "Payment was declined",
          details:
            "The payment could not be processed. Postdated payments are notified to the sales agent.",
        });
      } else if (response.status === 403) {
        setResult({
          status: "processing",
          message: data.message || "Payment was Scheduled",
          details: "The payment is scheduled.",
        });
      } else if (response.status === 404) {
        setError(data.message || "No amortization found for this Case ID.");
      } else if (response.status === 405) {
        setError(data.message || "Payment error for this Case ID, try again!");
      } else if (response.status === 406) {
        setError(data.message || "Case not ready for processing. Status invalid.");
      } else if (response.status === 409) {
        setError(data.message || "Payment already processed for this case.");
      } else {
        throw new Error(`Server error: ${response.status}`);
      }
    } catch (err) {
      console.error(err);
      setError("Failed to process payment. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setFormData({ CaseId: "", Source: "P2", ScheduledTime: "immediate" });
    setResult(null);
    setError("");
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "success":
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case "declined":
        return <XCircle className="h-5 w-5 text-red-500" />;
      case "processing":
        return <Clock className="h-5 w-5 text-blue-500 animate-spin" />;
      default:
        return <CreditCard className="h-5 w-5 text-gray-500" />;
    }
  };

  return (
    <>
      <div className="hidden md:block">
        <Box1 />
      </div>
      <div className="block md:hidden">
        <FloatingContact />
      </div>
      <Navbar />
      <div className="min-h-[100%] bg-gray-50 py-[80px] px-6">
        <div className="max-w-2xl mx-auto">
          <Card className="shadow-lg">
            <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-t-lg">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <CreditCard className="h-6 w-6" />
                  <div>
                    <CardTitle>Payment Handler</CardTitle>
                    <CardDescription className="text-blue-100">
                      Process payments for cases with automatic status updates
                    </CardDescription>
                  </div>
                </div>
                <Button
                  onClick={handleLogout}
                  variant="outline"
                  size="sm"
                  className="border-white/20 text-black hover:bg-white/10 hover:text-white"
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  Logout
                </Button>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="space-y-2">
                  <Label htmlFor="caseId" className="text-sm font-medium text-gray-700">
                    Case ID *
                  </Label>
                  <Input
                    id="caseId"
                    type="text"
                    value={formData.CaseId}
                    onChange={(e) =>
                      setFormData({ ...formData, CaseId: e.target.value })
                    }
                    placeholder="Enter case ID"
                    className="w-full"
                    disabled={isLoading}
                    required
                  />
                </div>

                <div className="space-y-3">
                  <Label className="text-sm font-medium text-gray-700">Type *</Label>
                  <RadioGroup
                    value={formData.Source}
                    onValueChange={(value) =>
                      setFormData({ ...formData, Source: value as "P2" | "P1" })
                    }
                    disabled={isLoading}
                    className="flex gap-6"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="P2" id="not-upsell" />
                      <Label htmlFor="not-upsell" className="text-sm">
                        P2
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="P1" id="upsell" />
                      <Label htmlFor="upsell" className="text-sm">
                        P1
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-3">
                  <Label className="text-sm font-medium text-gray-700">Time *</Label>
                  <RadioGroup
                    value={formData.ScheduledTime}
                    onValueChange={(value) =>
                      setFormData({ ...formData, ScheduledTime: value as "immediate" | "post_date" })
                    }
                    disabled={isLoading}
                    className="flex gap-6"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="immediate" id="immediate" />
                      <Label htmlFor="immediate" className="text-sm">
                        Immediate
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="post_date" id="post_date" />
                      <Label htmlFor="post_date" className="text-sm">
                        Post Date
                      </Label>
                    </div>

                    {formData.ScheduledTime === "post_date" && ( 
                      <div className="flex flex-col gap-5">

                      <div className="flex items-center space-x-2">
                        <Label htmlFor="scheduleDate" className="text-sm">
                          Choose Your Date:
                        </Label>
                        <input
                          id="scheduleDate"
                          type="date"
                          value={formData.ScheduledDate || ""}
                          onChange={(e) =>
                            setFormData({ ...formData, ScheduledDate: e.target.value })
                          }
                          className="border rounded px-2 py-1 text-sm"
                          disabled={isLoading}
                          required
                        />
                      </div>
                      <div className="flex items-center space-x-2">
                            <Label htmlFor="scheduleDate" className="text-sm">
                              Choose Your Hour:
                            </Label>
                            <input
                              id="scheduleHour"
                              type="time"
                              value={formData.ScheduledHour || ""}
                              onChange={(e) =>
                                setFormData({ ...formData, ScheduledHour: e.target.value })
                              }
                              className="border rounded px-2 py-1 text-sm"
                              disabled={isLoading}
                              required
                            />
                      </div>

                    </div>
                      
                    )}
                  </RadioGroup>
                </div>

                <div className="flex gap-3">
                  <Button
                    type="submit"
                    disabled={isLoading || !formData.CaseId.trim()}
                    className="flex-1 bg-blue-600 hover:bg-blue-700"
                  >
                    {isLoading ? (
                      <>
                        <Clock className="h-4 w-4 mr-2 animate-spin" />
                        Processing...
                      </>
                    ) : (
                      <>
                        <CreditCard className="h-4 w-4 mr-2" />
                        Process Payment
                      </>
                    )}
                  </Button>
                  <Button onClick={handleReset} variant="outline" disabled={isLoading} className="px-6">
                    Reset
                  </Button>
                </div>
              </form>

              {result && (
                <Alert
                  className={`mt-6 ${
                    result.status === "success"
                      ? "border-green-500 bg-green-50"
                      : result.status === "declined"
                      ? "border-red-500 bg-red-50"
                      : "border-blue-500 bg-blue-50"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    {getStatusIcon(result.status)}
                    <div className="flex-1">
                      <h4
                        className={`font-medium ${
                          result.status === "success"
                            ? "text-green-800"
                            : result.status === "declined"
                            ? "text-red-800"
                            : "text-blue-800"
                        }`}
                      >
                        {result.message}
                      </h4>
                      <AlertDescription
                        className={
                          result.status === "success"
                            ? "text-green-700"
                            : result.status === "declined"
                            ? "text-red-700"
                            : "text-blue-700"
                        }
                      >
                        {result.details}
                      </AlertDescription>
                    </div>
                  </div>
                </Alert>
              )}

              {error && (
                <Alert className="mt-6 border-red-500 bg-red-50">
                  <XCircle className="h-4 w-4 text-red-500" />
                  <AlertDescription className="text-red-700">{error}</AlertDescription>
                </Alert>
              )}

              {isLoading && (
                <Alert className="mt-6 border-blue-500 bg-blue-50">
                  <Clock className="h-4 w-4 text-blue-500 animate-spin" />
                  <AlertDescription className="text-blue-700">
                    Processing payment for Case ID: {formData.CaseId}... This may take a few moments.
                  </AlertDescription>
                </Alert>
              )}
            </CardContent>
          </Card>

          <Card className="mt-6 bg-gray-50 border-gray-200">
            <CardHeader>
              <CardTitle className="text-lg text-gray-800">How it works</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-gray-600 space-y-2">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>
                  <strong>Success:</strong> Receipt sent to client, case status updated
                </span>
              </div>
              <div className="flex items-center gap-2">
                <XCircle className="h-4 w-4 text-red-500" />
                <span>
                  <strong>Declined:</strong> Payment failed, sales agent notified for postdated payments
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-blue-500" />
                <span>
                  <strong>Scheduled:</strong> Future payments are automatically scheduled
                </span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PaymentHandlerForm;
