import { Schema, model } from "mongoose";

const User = new Schema({
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true }
});

export default model("user", User);
