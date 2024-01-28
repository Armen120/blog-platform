import { CommentService } from "../service/commentService.js";

export class CommentController {
  static async getComments(req, res, next) {
    try {
      const userId = req.user._id;
      const blogId = req.params.blogId;
      const blogs = await CommentService.getComments(userId, blogId);
      res.status(201).json(blogs);
    } catch (err) {
      next(err);
    }
  }

  static async createComment(req, res, next) {
    try {
      const blogId = req.params.blogId;
      const userId = req.user._id;
      const text = req.body.text;
      const comment = await CommentService.createComment(text, userId, blogId);
      res.status(201).json(comment);
    } catch (err) {
      next(err);
    }
  }

  static async deleteComment(req, res, next) {
    try {
      const blogId = req.params.blogId;
      const userId = req.user._id;
      const commentId = req.params.commentId;
      await CommentService.deletecomment(userId, blogId, commentId);
      res.status(201).json({ message: "comment is deleted" });
    } catch (err) {
      next(err);
    }
  }
}
