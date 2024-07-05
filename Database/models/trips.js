import mongoose from "mongoose";
import { Schema } from "mongoose";
const TripShema = new Schema(
  {
    fromStationId: {
      type: Schema.Types.ObjectId,
      ref: "Station",
      required: true,
    },
    toStationId: {
      type: Schema.Types.ObjectId,
      ref: "Station",
      required: true,
    },
    startTime: { type: Date, required: true },
    seats: { type: Number, required: true },
    price: { type: Number, required: true },
    busHouseId: {
      type: Schema.Types.ObjectId,
      ref: "Bushouse",
      required: true,
    },
    busStationId: {
      type: Schema.Types.ObjectId,
      ref: "Bussation",
      required: true,
    },
  },
  { timestamps: true }
);
export default mongoose.model("Trip", TripShema);
