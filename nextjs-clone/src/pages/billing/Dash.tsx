"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

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
import SalesReportDashboard from "./LedgerReports";

interface PaymentFormData {
  CaseId: string;
  Source: "P2" | "P1";
  ScheduledTime: "immediate" | "post_date";
  // ScheduledDate?: string;
  ScheduledHour?: string;
}

interface CancelFormData {
  CaseId: string;
  CancelType: "cancel" | "reschedule";
  NewHour?: string;
  Reason : string;
}

interface ResultData {
  status: "success" | "declined" | "processing";
  message: string;
  details: string;
}

const PaymentCancelHandler: React.FC = () => {
  const [isCancelForm, setIsCancelForm] = useState(false);

  const [paymentData, setPaymentData] = useState<PaymentFormData>({
    CaseId: "",
    Source: "P2",
    ScheduledTime: "immediate",
    // ScheduledDate: "",
    ScheduledHour: "",
  });

  const [cancelData, setCancelData] = useState<CancelFormData>({
    CaseId: "",
    CancelType: "cancel",
    NewHour: "",
    Reason : ""
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

  const handlePaymentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setResult(null);

    const form = paymentData;

    if (!form.CaseId.trim()) {
      setError("Case ID is required");
      return;
    }

    if (form.ScheduledTime === "post_date") {
      if (!form.ScheduledHour || form.ScheduledHour.trim() === "") {
        setError("Please choose an hour for post-dated payment");
        return;
      }
    }

    setIsLoading(true);
    try {
      const response = await fetch("/api/paymentHandler", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await response.json().catch(() => ({}));

      if (response.ok || [201, 202].includes(response.status)) {
        setResult({
          status: "success",
          message: data.message || "Payment processed successfully!",
          details: "Receipt has been sent to the client.",
        });
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
          message: data.message || "Payment scheduled",
          details: "The payment is scheduled.",
        });
      } else {
        setError(data.message || `Payment error: ${response.status}`);
      }
    } catch (err) {
      console.error(err);
      setError("Failed to process payment. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancelSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setResult(null);

    const form = cancelData;

    console.log(form);

    if (!form.CaseId.trim()) {
      setError("Case ID is required");
      return;
    }

    if (form.CancelType === "reschedule" && (!form.NewHour || form.NewHour.trim() === "")) {
      setError("Please select a new date for rescheduling");
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch("/api/cancelHandler", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await response.json().catch(() => ({}));

      if (response.ok || [201, 202].includes(response.status)) {
        setResult({
          status: "success",
          message:
            form.CancelType === "reschedule"
              ? data.message || "Case rescheduled successfully!"
              : data.message || "Case cancelled successfully!",
          details:
            form.CancelType === "reschedule"
              ? `New scheduled date: ${form.NewHour}`
              : `Cancellation confirmed.`,
        });
      } else if (response.status === 402) {
        setResult({
          status: "declined",
          message: data.message || "Operation declined",
          details: "Admin notified.",
        });
      } else if (response.status === 403) {
        setResult({
          status: "processing",
          message: data.message || "Operation processing",
          details: "The request is being processed.",
        });
      } else {
        setError(data.message || `Error: ${response.status}`);
      }
    } catch (err) {
      console.error(err);
      setError("Failed to process request. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    if (!isCancelForm) {
      setPaymentData({ CaseId: "", Source: "P2", ScheduledTime: "immediate" });
    } else {
      setCancelData({ CaseId: "", CancelType: "cancel", NewHour: "", Reason : "" });
    }
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
      {/* <div className="hidden md:block">
        <Box1 />
      </div> */}
      <div className="block md:hidden">
        <FloatingContact />
      </div>
      <div className="navbar">
      <Navbar />
</div>
     
      <div className="min-h-[100%] bg-gray-50 py-[40px] px-6 pt-[100px]">
         <div className="flex justify-center items-center gap-3 py-6">
        <span className={!isCancelForm ? "font-semibold text-blue-600" : "text-gray-500"}>
          Payment
        </span>
        <button
          onClick={() => {
            setIsCancelForm(!isCancelForm);
            handleReset();
          }}
          className={`relative inline-flex h-6 w-12 items-center rounded-full transition ${
            isCancelForm ? "bg-red-500" : "bg-green-500"
          }`}
        >
          <span
            className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
              isCancelForm ? "translate-x-7" : "translate-x-1"
            }`}
          />
        </button>
        <span className={isCancelForm ? "font-semibold text-red-600" : "text-gray-500"}>
          Cancel / Reschedule
        </span>
      </div>

        <div className="max-w-2xl mx-auto">
          {result && (
            <Alert
              className={`my-6 ${
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
            <Alert className="my-6 border-red-500 bg-red-50">
              <XCircle className="h-4 w-4 text-red-500" />
              <AlertDescription className="text-red-700">{error}</AlertDescription>
            </Alert>
          )}

          {isLoading && (
            <Alert className="my-6 border-blue-500 bg-blue-50">
              <Clock className="h-4 w-4 text-blue-500 animate-spin" />
              <AlertDescription className="text-blue-700">
                {isCancelForm
                  ? `Processing ${cancelData.CancelType} for Case ID: ${cancelData.CaseId}...`
                  : `Processing payment for Case ID: ${paymentData.CaseId}...`}
              </AlertDescription>
            </Alert>
          )}

          {!isCancelForm ? (
            <Card className="shadow-lg">
              <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-t-lg">
                <CardTitle>Payment Handler</CardTitle>
                <CardDescription className="text-blue-100">
                  Process payments for cases
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <form className="space-y-6" onSubmit={handlePaymentSubmit}>
                  <div className="space-y-2">
                    <Label htmlFor="caseId">Case ID *</Label>
                    <Input
                      id="caseId"
                      type="text"
                      value={paymentData.CaseId}
                      onChange={(e) =>
                        setPaymentData({ ...paymentData, CaseId: e.target.value })
                      }
                      placeholder="Enter case ID"
                      disabled={isLoading}
                      required
                    />
                  </div>

                  <div className="space-y-3">
                    <Label>Source *</Label>
                    <RadioGroup
                      value={paymentData.Source}
                      onValueChange={(value) =>
                        setPaymentData({ ...paymentData, Source: value as "P1" | "P2" })
                      }
                      className="flex gap-6"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="P1" id="p1" />
                        <Label htmlFor="p1">P1</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="P2" id="p2" />
                        <Label htmlFor="p2">P2</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="space-y-3 ">
                    <Label>Schedule *</Label>
                    <RadioGroup
                      value={paymentData.ScheduledTime}
                      onValueChange={(value) =>
                        setPaymentData({ ...paymentData, ScheduledTime: value as "immediate" | "post_date" })
                      }
                      className="flex gap-6"
                    >
                      <div className="flex items-center space-x-2 pb-2">
                        <RadioGroupItem value="immediate" id="immediate" />
                        <Label htmlFor="immediate">Immediate</Label>
                      </div>
                      <div className="flex items-center space-x-2 pb-2">
                        <RadioGroupItem value="post_date" id="post_date" />
                        <Label htmlFor="post_date">Post Date</Label>
                      </div>
                    </RadioGroup>

                    {paymentData.ScheduledTime === "post_date" && (
                      <div className="flex flex-col gap-4 mt-4">
                        <div className="flex gap-2 items-center ">
                          <Label>Choose Hour:</Label>
                          <input
                            type="time"
                            value={paymentData.ScheduledHour || ""}
                            onChange={(e) =>
                              setPaymentData({ ...paymentData, ScheduledHour: e.target.value })
                            }
                            className="border rounded px-2 py-1 text-sm "
                            disabled={isLoading}
                          />
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="flex gap-3">
                    <Button type="submit" className="flex-1 bg-blue-600 hover:bg-blue-700" disabled={isLoading}>
                      {isLoading ? (
                        <>
                          <Clock className="h-4 w-4 mr-2 animate-spin" /> Processing...
                        </>
                      ) : (
                        <>
                          <CreditCard className="h-4 w-4 mr-2" /> Process Payment
                        </>
                      )}
                    </Button>
                    <Button onClick={handleReset} variant="outline" disabled={isLoading}>
                      Reset
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          ) : (
            <Card className="shadow-lg">
              <CardHeader className="bg-gradient-to-r from-red-600 to-red-800 text-white rounded-t-lg">
                <CardTitle>Cancel / Reschedule Case</CardTitle>
                <CardDescription className="text-red-100">
                  Cancel or reschedule a case with automatic status updates
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <form className="space-y-6" onSubmit={handleCancelSubmit}>
                  <div className="space-y-2">
                    <Label htmlFor="caseId">Case ID *</Label>
                    <Input
                      id="caseId"
                      type="text"
                      value={cancelData.CaseId}
                      onChange={(e) =>
                        setCancelData({ ...cancelData, CaseId: e.target.value })
                      }
                      placeholder="Enter case ID"
                      disabled={isLoading}
                      required
                    />
                  </div>

                  <div className="space-y-3">
                    <Label className="pt-[10px]">Action Type *</Label>
                    <RadioGroup
                      value={cancelData.CancelType}
                      onValueChange={(value) =>
                        setCancelData({ ...cancelData, CancelType: value as "cancel" | "reschedule" })
                      }
                      className="flex gap-6"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="cancel" id="cancelTypeCancel" />
                        <Label htmlFor="cancelTypeCancel">Cancel Case</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="reschedule" id="cancelTypeReschedule" />
                        <Label htmlFor="cancelTypeReschedule">Reschedule</Label>
                      </div>
                    </RadioGroup>

                    {cancelData.CancelType === "reschedule" && (
                      <div className="flex gap-2 mt-5 w-full items-center pt-[10px]">
                        <Label className="mb-1">Choose New Hour:</Label>
                        <input
                          type="time"
                          value={cancelData.NewHour || ""}
                          onChange={(e) =>
                            setCancelData({ ...cancelData, NewHour: e.target.value })
                          }
                          className="border rounded px-2 py-1 text-sm "
                          disabled={isLoading}
                          required
                        />
                      </div>
                    )}

                      <div className="space-y-2">
                        <Label htmlFor="caseId">Reason</Label>
                        <Textarea
                            id="reason"
                            value={cancelData.Reason}
                            onChange={(e) =>
                              setCancelData({ ...cancelData, Reason: e.target.value })
                            }
                            placeholder="Enter reason (optional)"
                            disabled={isLoading}
                          />
                  </div>

                  </div>

                  <div className="flex gap-3">
                    <Button type="submit" className="flex-1 bg-red-600 hover:bg-red-700" disabled={isLoading}>
                      {isLoading ? (
                        <>
                          <Clock className="h-4 w-4 mr-2 animate-spin" /> Processing...
                        </>
                      ) : (
                        <>
                          <XCircle className="h-4 w-4 mr-2" /> {cancelData.CancelType === "reschedule" ? "Reschedule Case" : "Cancel Case"}
                        </>
                      )}
                    </Button>
                    <Button onClick={handleReset} variant="outline" disabled={isLoading}>
                      Reset
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
          <SalesReportDashboard/>
      <Footer />
    </>
  );
};

export default PaymentCancelHandler;
