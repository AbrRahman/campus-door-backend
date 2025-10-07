import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";
import { TUser } from "./user.interface";

const userSchema = new Schema<TUser>(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      trim: true,
      lowercase: true,
    },
    image: {
      type: String,
      trim: true,
    },
    password: {
      type: String,
      trim: true,
      select: 0,
    },
    phone: {
      type: String,
      trim: true,
      default: "",
    },

    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  const user = this;
  user.password = await bcrypt.hash(user.password as string, 10);
  next();
});
userSchema.post("save", async function (doc, next) {
  doc.password = "";
  next();
});
const UserModel = mongoose.model<TUser>("user", userSchema);
export default UserModel;
