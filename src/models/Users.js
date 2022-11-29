import { Schema, model } from "mongoose";
import bcrypt from "bcryptjs";

const UserSchema = new Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    date: { type: Date, default: Date.now },
    referral_code: { type: String, required: true },
    uuid: { 
      type: String,
      default: "",
    },
    phone: { 
      type: Number,
      default: 0,
    },
    firstname: {
        type: String,
        default: "",
    },
    lastname: {
        type: String,
        default: "",
    },
    address: {
        type: String,
        default: "",
    },
    city: {
        type: String,
        default: "",
    },
    country: {
        type: String,
        default: "",
    },
    postalcode: {
        type: Number,
        default: 0,
    },
    wallet: {
        type: String,
        default: "",
    },
    addresswallet: {
        type: String,
        default: "",
    },
    description: {
        type: String,
        default: "",
    },
    status: {
      type: String,
      default: "Cuenta Inactiva",
    },
    balance: {
      type: Number,
      default: 0.00,
    },
    investment: {
      type: Number,
      default: 0.00,
    },
    referral: {
      type: Number,
      default: 0,
    },
    referralactive: {
      type: Number,
      default: 0,
    },
    numberplan: {
      type: Number,
      default: 0,
    },
    plan: {
      type: String,
      default: "Sin Planes",
    },
    day: {
      type: String,
      default: "0/10",
    },
    date: {
      type: String,
      default: "00/00/00",
    },
    sorteo: {
      type: String,
      default: "No has sido seleccionado",
    },
    participation: {
      type: String,
      default: "Correo no enviado",
    },
    reclamed: {
      type: String,
      default: "btn bg-gradient-primary mb-0 disabled",
    },
    sorteoAmount: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

UserSchema.methods.encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

UserSchema.methods.matchPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

export default model("User", UserSchema);
