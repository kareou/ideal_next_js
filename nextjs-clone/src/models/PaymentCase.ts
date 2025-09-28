import mongoose, { Document, Model } from "mongoose";

export interface IPaymentCase extends Document {
  CaseID: string | number;
  SalesAgent: string;
  PaymentStatus: string; 
  Amount: number;
  SalesDate: Date;
  StatusId?: number;
}

const paymentCaseSchema = new mongoose.Schema<IPaymentCase>({
  CaseID: { type: String, required: true, unique : true},
  SalesAgent: { type: String, required: true },
  PaymentStatus: { type: String, required: true },
  Amount: { type: Number, required: true },
  SalesDate: { type: Date, required: true },
  StatusId: { type: Number }, 
}, { timestamps: true });

paymentCaseSchema.index({ CaseID: 1 }, { unique: true });

const PaymentCase: Model<IPaymentCase> = mongoose.models.PaymentCase || mongoose.model("PaymentCase", paymentCaseSchema);

export default PaymentCase;
