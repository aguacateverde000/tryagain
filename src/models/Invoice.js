import { Schema, model } from "mongoose";

const InvoiceSchema = new Schema(
  {
    pdf: {
      type: String,
      default: "",
    },
    id: {
      type: String,
      default: "",
    },
    dateInvoice: { 
      type: String, 
      default: "" 
    },
    date: { type: Date, default: Date.now },
    user: {
      type: String,
      required: true,
    },
    amount: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model("Invoice", InvoiceSchema);
