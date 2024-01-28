import blogModel from "../models/blogModel.js";

export class BlogService {
  static async createBlog(title, body, author, userId) {
    const createdAt = new Date();
    const updateAt = "no updates";
    const BlogDto = {
      title,
      body,
      author,
      createdAt,
      updateAt,
    };
    const blog = await blogModel.create({ ...BlogDto, userId });
    return blog;
  }

  static async deleteBlog(_id, userId) {
    const blog = await blogModel.findOneAndDelete({ _id, userId });
    return blog;
  }

  static async updateBlog(conntent, _id, userId) {
    const blog = await blogModel.findOneAndUpdate(
      { _id, userId },
      { $set: { ...conntent } }
    );
    return blog;
  }

  static async getBlogs() {
    const blogs = await blogModel.find();
    return blogs;
  }
}
