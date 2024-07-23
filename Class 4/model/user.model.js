import { Schema, model } from "mongoose";
const userSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name is Required"],
    trim: true,
    minLength: [3, " Name must be atleast 3 characters"],
    maxLength: [10, " Name must be atmost 10 characters"],
  },
  email: {
    type: String,
    required: [true, "Email is Required"],
    trim: true,
    unique: true,
  },
  phone: {
    type: Number,
    required: [true, "Phone is Required"],
  },
  password: {
    type: String,
    required: [true, "Password is Required"],
    minLength: [6, "Password must be atleast 6 characters"],
  },
});
const User = model("User", userSchema);
export default User;
