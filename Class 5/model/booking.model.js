import mongoose from "mongoose";
import { Schema, model } from "mongoose";

const bookingSchema = new Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    transactionId: {
      type: String,
      required: true,
    },
    seats: {
      type: [String],
      default: [],
      required: true,
    },
    show: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "shows",
      required: true,
    },
  },
  { timestamps: true }
);
const Booking = model("booking", bookingSchema);
export default Booking;
