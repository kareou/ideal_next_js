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
import { CheckCircle, XCircle, Clock, CreditCard } from "lucide-react";
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

interface CancelData {
  CaseId: string;
  CancelType: "A" | "B";
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
  const [cancelData, setCancelData] = useState<CancelData>({
    CaseId: "",
    CancelType: "A",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<ResultData | null>(null);
  const [error, setError] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [isCancelForm, setIsCancelForm] = useState(false);

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

  // ---------------- PAYMENT SUBMIT ----------------
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

  // ---------------- CANCEL SUBMIT ----------------
  const handleCancelSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setResult(null);

    if (!cancelData.CaseId.trim()) {
      setError("Case ID is required for cancellation");
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch("/api/cancelHandler", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(cancelData),
      });

      const data = await response.json().catch(() => ({}));

      if (response.ok) {
        setResult({
          status: "success",
          message: data.message || "Case cancelled successfully!",
          details: `Cancellation type: ${cancelData.CancelType}`,
        });
      } else {
        setError(data.message || "Error cancelling case.");
      }
    } catch (err) {
      console.error(err);
      setError("Failed to cancel case. Please try again.");
    } finally {
      setIsLoading(false);
    }
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

      {/* Toggle Switch */}
      <div className="flex justify-center items-center gap-3 py-6">
        <span className={!isCancelForm ? "font-semibold text-blue-600" : "text-gray-500"}>
          Payment
        </span>
        <button
          onClick={() => setIsCancelForm(!isCancelForm)}
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
          Cancel
        </span>
      </div>

      <div className="min-h-[100%] bg-gray-50 py-[40px] px-6">
        <div className="max-w-2xl mx-auto">
          {!isCancelForm ? (
            // ---------------- PAYMENT FORM ----------------
            <Card className="shadow-lg">
              <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-t-lg">
                <CardTitle>Payment Handler</CardTitle>
                <CardDescription className="text-blue-100">
                  Schedule or process a payment
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                {error && (
                  <Alert variant="destructive" className="mb-4">
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                )}
                {result && (
                  <Alert className="mb-4">
                    <div className="flex items-center gap-2">
                      {getStatusIcon(result.status)}
                      <div>
                        <p className="font-semibold">{result.message}</p>
                        <p className="text-sm text-gray-600">{result.details}</p>
                      </div>
                    </div>
                  </Alert>
                )}

                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="space-y-2">
                    <Label htmlFor="caseId">Case ID *</Label>
                    <Input
                      id="caseId"
                      type="text"
                      value={formData.CaseId}
                      onChange={(e) => setFormData({ ...formData, CaseId: e.target.value })}
                      placeholder="Enter case ID"
                      className="w-full"
                      disabled={isLoading}
                      required
                    />
                  </div>

                  <div className="space-y-3">
                    <Label>Source *</Label>
                    <RadioGroup
                      value={formData.Source}
                      onValueChange={(value) =>
                        setFormData({ ...formData, Source: value as "P1" | "P2" })
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

                  <div className="space-y-3">
                    <Label>Schedule *</Label>
                    <RadioGroup
                      value={formData.ScheduledTime}
                      onValueChange={(value) =>
                        setFormData({ ...formData, ScheduledTime: value as "immediate" | "post_date" })
                      }
                      className="flex gap-6"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="immediate" id="immediate" />
                        <Label htmlFor="immediate">Immediate</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="post_date" id="post_date" />
                        <Label htmlFor="post_date">Post-dated</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  {formData.ScheduledTime === "post_date" && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="scheduledDate">Date *</Label>
                        <Input
                          id="scheduledDate"
                          type="date"
                          value={formData.ScheduledDate}
                          onChange={(e) =>
                            setFormData({ ...formData, ScheduledDate: e.target.value })
                          }
                          className="w-full"
                          disabled={isLoading}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="scheduledHour">Hour *</Label>
                        <Input
                          id="scheduledHour"
                          type="time"
                          value={formData.ScheduledHour}
                          onChange={(e) =>
                            setFormData({ ...formData, ScheduledHour: e.target.value })
                          }
                          className="w-full"
                          disabled={isLoading}
                          required
                        />
                      </div>
                    </div>
                  )}

                  <Button
                    type="submit"
                    disabled={isLoading || !formData.CaseId.trim()}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white"
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
                </form>
              </CardContent>
            </Card>
          ) : (
            // ---------------- CANCEL FORM ----------------
            <Card className="shadow-lg border-red-500">
              <CardHeader className="bg-gradient-to-r from-red-600 to-red-800 text-white rounded-t-lg">
                <CardTitle>Cancel Case</CardTitle>
                <CardDescription className="text-red-100">
                  Cancel case with required details
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <form className="space-y-6" onSubmit={handleCancelSubmit}>
                  <div className="space-y-2">
                    <Label htmlFor="cancelCaseId">Case ID *</Label>
                    <Input
                      id="cancelCaseId"
                      type="text"
                      value={cancelData.CaseId}
                      onChange={(e) => setCancelData({ ...cancelData, CaseId: e.target.value })}
                      placeholder="Enter case ID"
                      className="w-full"
                      disabled={isLoading}
                      required
                    />
                  </div>

                  <div className="space-y-3">
                    <Label>Cancellation Type *</Label>
                    <RadioGroup
                      value={cancelData.CancelType}
                      onValueChange={(value) =>
                        setCancelData({ ...cancelData, CancelType: value as "A" | "B" })
                      }
                      className="flex gap-6"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="A" id="cancel-a" />
                        <Label htmlFor="cancel-a">Type A</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="B" id="cancel-b" />
                        <Label htmlFor="cancel-b">Type B</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <Button
                    type="submit"
                    disabled={isLoading || !cancelData.CaseId.trim()}
                    className="w-full bg-red-600 hover:bg-red-700 text-white"
                  >
                    {isLoading ? (
                      <>
                        <Clock className="h-4 w-4 mr-2 animate-spin" />
                        Processing...
                      </>
                    ) : (
                      <>
                        <XCircle className="h-4 w-4 mr-2" />
                        Cancel Case
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PaymentHandlerForm;
