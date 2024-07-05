import mongoose from "mongoose";
import { Schema } from "mongoose";
const Booking = new Schema(
  {
    name: String,
    email: String,
    phone: String,
    quantity: Number,
    payment: String,
    tripId: { type: Schema.Types.ObjectId, ref: "Trip" },
    price: Number,
  },
  { timestamps: true }
);
export default mongoose.model("Booking", Booking);
