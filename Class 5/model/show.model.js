import mongoose from "mongoose";
import { Schema, model } from "mongoose";
const showSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is Required"],
    },
    date: {
      type: Date,
      required: [true, "Date is Required"],
    },
    time: {
      type: String,
      required: [true, "Time is Required"],
    },
    movie: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "movies",
      required: true,
    },
    theatre: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "theatres",
      required: true,
    },
    totalSeats: {
      type: Number,
      required: true,
    },
    bookedSeats: {
      type: [String],
      default: [],
    },
    ticketPrice: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);
const Show = model("show", showSchema);
export default Show;
