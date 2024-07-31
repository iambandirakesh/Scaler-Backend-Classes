import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";
const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is Required"],
      minLength: [3, " Name must be atleast 3 characters"],
      maxLength: [10, " Name must be atmost 10 characters"],
    },
    email: {
      type: String,
      required: [true, "Email is Required"],
      lowercase: true,
      unique: true,
    },
    phone: {
      type: String,
      required: [true, "Phone is Required"],
    },
    password: {
      type: String,
      required: [true, "Password is Required"],
      minLength: [6, "Password must be atleast 6 characters"],
      select: false,
    },
    isAdmin: {
      type: Boolean,
      default: false,
      required: true,
    },
  },
  { timestamps: true }
);
userSchema.pre("save", async function (next) {
  try {
    const user = this;
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(user.password, salt);
    user.password = hashPassword;
  } catch (err) {
    console.log(err);
  }
  next();
});
const User = model("user", userSchema);
export default User;
