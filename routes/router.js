import { Router } from "express";
import { UserController } from "../controllers/userController.js";
import { authenticate } from "../middlewares/authMiddleware.js";
import {validateUserRegistration, validateBlogPostCreation, validateCommentCreation} from '../middlewares/validation.js'
import { BlogController } from "../controllers/blogController.js";
import { CommentController } from "../controllers/commentController.js";

const router = new Router();

router.post('/auth/registration',validateUserRegistration, UserController.registration);
router.post('/auth/login', UserController.login);
router.post('/auth/logout/:userId', UserController.logout);
router.get('/blogs', BlogController.getBlogs);
router.post('/blogs/create', authenticate, validateBlogPostCreation, BlogController.createBlog);
router.delete('/blogs/delete/:blogId', authenticate, BlogController.deleteBlog);
router.patch('/blogs/update/:blogId', authenticate, BlogController.updateBlog);
router.post('/blogs/:blogId/comment/create', authenticate, validateCommentCreation, CommentController.createComment);
router.delete('/blogs/:blogId/comment/delete/:commentId', authenticate, CommentController.deleteComment);
router.get('/blogs/blogId/comments', authenticate, CommentController.getComments);


export {router}