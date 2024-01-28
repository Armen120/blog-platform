import { Context } from "express-validator/src/context.js";
import { BlogService } from "../service/blogService.js";

export class BlogController {
  static async createBlog(req, res, next) {
    try {
      const { title, body, author } = req.body;
      const userId = req.user._id;
      const post = await BlogService.createBlog(title, body, author, userId);

      res.status(201).json(post);
    } catch (err) {
      next(err);
    }
  }

  static async deleteBlog(req, res, next) {
    try {
      const _id = req.params.blogId;
      const userId = req.user._id;
      const blog = await BlogService.deleteBlog(_id, userId);
      res.status(201).json({message: 'Blog is deleted'});
    } catch (err) {
      next(err);
    }
  }

  static async updateBlog(req, res, next) {
    try {
      const _id = req.params.blogId;
      const userId = req.user._id;
      const conntent = req.body;
      const blog = await BlogService.updateBlog(conntent, _id, userId);
      res.status(201).json(blog);
    } catch (err) {
      next(err);
    }
  }

  static async getBlogs(req, res, next) {
    try {
      const blogs = await BlogService.getBlogs();
      res.status(201).json(blogs);
    } catch (err) {
      next(err);
    }
  }
}
