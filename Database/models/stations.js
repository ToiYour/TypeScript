import mongoose from "mongoose";
import { Schema } from "mongoose";
const StationShema = new Schema(
  {
    id: { type: Schema.Types.ObjectId },
    name: String,
    province: String,
  },
  { timestamps: true }
);
export default mongoose.model("Station", StationShema);
