import { Schema, model } from "mongoose";

const RequestSchema = new Schema(
  {
    plan: {
      type: String,
      default: "",
    },
    phone: { 
      type: Number, 
      default: "" 
    },
    date: { type: Date, default: Date.now },
    status: {
      type: String,
      default: "Pendiente",
    },
    user: {
      type: String,
      required: true,
    },
    hash: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model("Request", RequestSchema);
