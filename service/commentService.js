import commentModel from "../models/commentModel.js";

export class CommentService {
    
  static async createComment(text, userId, blogId) {
    const createdAt = new Date();
    const comment = await commentModel.create({
      text,
      userId,
      blogId,
      createdAt,
    });
    return comment;
  }

  static async getComments(userId, blogId) {
    const comments = await commentModel.find({ userId, blogId });
    return comments;
  }

  static async deletecomment(userId, blogId, _id) {
    const comment = await commentModel.findOneAndDelete({ blogId, _id, userId });
    return comment;
  }
}