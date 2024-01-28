import { Schema, model } from "mongoose";

const Blog = new Schema({
  title: { type: String, required: true },
  body: { type: String, required: true },
  author: { type: String, required: true },
  createdAt: { type: String },
  updateAt: { type: String},
  userId: { type: Schema.Types.ObjectId, ref: 'user', required: true },
 
});

export default  model("blog", Blog);
