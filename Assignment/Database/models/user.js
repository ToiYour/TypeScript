import mongoose from "mongoose";
import { Schema } from "mongoose";
const User = new Schema({
  name: String,
  email: String,
  password: String,
});
export default mongoose.model("User", User);
