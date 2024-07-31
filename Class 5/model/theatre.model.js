import mongoose from "mongoose";
import { Schema, model } from "mongoose";
const theatreSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is Required"],
    },
    location: {
      type: String,
      required: [true, "Location is Required"],
    },
    phone: {
      type: String,
      required: [true, "Phone is Required"],
    },
    email: {
      type: String,
      required: [true, "Email is Required"],
    },
    isActive: {
      type: Boolean,
      required: true,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
  },
  { timestamps: true }
);
const Theatre = model("theatres", theatreSchema);
export default Theatre;
