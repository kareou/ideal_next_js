import mongoose, { Schema, Document, Model } from "mongoose";

export interface IPayment extends Document {
  caseId: number;
  dueDate: Date;
  status: "scheduled" | "processed" | "failed" | "cancelled";
  notes?: string;
  source : "P1" | "P2"
  amount: String;
  processedAt?: Date;
  cancelledAt? : Date;
  reason : String;
  createdAt: Date;
  updatedAt: Date;
}

const paymentSchema: Schema<IPayment> = new Schema(
  {
    caseId: { type: Number, required: true, unique : true },
    dueDate: { type: Date, required: true },
    status: { type: String, enum: ["scheduled", "processed", "failed", "cancelled"], default: "scheduled" },
    notes: { type: String },
    source : {type : String, enum: ["P1", "P2"], default: "P1"},
    amount: { type: String },
    reason : {type : String, default : "Not mentioned"},
    cancelledAt : {type : Date},
    processedAt: { type: Date },
  },
  { timestamps: true }
);

paymentSchema.index({ caseId: 1 }, { unique: true });

const Payment: Model<IPayment> = mongoose.models.Payment || mongoose.model<IPayment>("Payment", paymentSchema);

export default Payment;
