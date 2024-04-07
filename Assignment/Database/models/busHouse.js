import mongoose from "mongoose";
import { Schema } from "mongoose";
const BusHous = new Schema(
  {
    name: String,
    adress: String,
    phone: String,
  },
  {
    timestamps: true,
  }
);
export default mongoose.model("Bushouse", BusHous);
