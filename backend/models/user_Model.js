import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    password: String,
    role: String,
  },
  { timestamps: true },
);

export const UserDataCollection = mongoose.model("UserSchema", UserSchema);
