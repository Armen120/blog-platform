/**
 * @swagger
 * tags:
 *   name: Authentication
 *   description: User authentication operations
 *
 * /api/auth/registration:
 *   post:
 *     summary: Register a new user
 *     tags: [Authentication]
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       201:
 *         description: User registered successfully
 *       400:
 *         description: Invalid input or user already exists
 */

/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: Log in
 *     tags: [Authentication]
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: returns a JWT token
 *       400:
 *         description: Invalid credentials
 */

/**
 * @swagger
 * /api/auth/logout:
 *   post:
 *     summary: Log out
 *     tags: [Authentication]
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: Logout successful
 *       400:
 *         description: Invalid or expired token
 */

/**
 * @swagger
 * tags:
 *   name: BlogPosts
 *   description: Operations related to blog posts
 *
 * /api/blogs/create:
 *   post:
 *     summary: Create a new blog post
 *     tags: [BlogPosts]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               author:
 *                 type: string
 *               body:
 *                 type: string
 *     responses:
 *       201:
 *         description:  returns a blog
 *       400:
 *         description: Invalid input
 */

/**
 * @swagger
 * /api/blogs:
 *   get:
 *     summary: Get all blog posts
 *     tags: [BlogPosts]
 *     responses:
 *       200:
 *         description: Returns a list of all blog posts
 */

/**
 * @swagger
 * /api/blogs/update/{blogId}:
 *   put:
 *     summary: Update a blog post
 *     tags: [BlogPosts]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - name: blogId
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *       - name: title
 *         in: query
 *         schema:
 *           type: string
 *       - name: body
 *         in: query
 *         schema:
 *           type: string
 *       - name: author
 *         in: query
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Blog post updated successfully
 *       404:
 *         description: Blog post not found
 */

/**
 * @swagger
 * /api/blogs/delete/{blogId}:
 *   delete:
 *     summary: Delete a blog post
 *     tags: [BlogPosts]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - name: blogId
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Blog post deleted successfully
 *       404:
 *         description: Blog post not found
 */

/**
 * @swagger
 * tags:
 *   name: Comments
 *   description: Operations related to comments
 *
 * /api/blogs/{blogId}/comments/create:
 *   post:
 *     summary: Add a comment to a blog post
 *     tags: [Comments]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - name: blogId
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               text:
 *                 type: string
 *     responses:
 *       201:
 *         description: Comment added successfully
 *       404:
 *         description: Blog post not found
 */

/**
 * @swagger
 * /api/blogs/{blogId}/comments:
 *   get:
 *     summary: Get comments for a blog post
 *     tags: [Comments]
 *     parameters:
 *       - name: blogId
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Returns a list of comments for the specified blog post
 *       404:
 *         description: Blog post not found
 */

/**
 * @swagger
 * /blogs/{blogId}/comments/{commentId}:
 *   delete:
 *     summary: Delete a comment
 *     tags: [Comments]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - name: blogId
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *       - name: commentId
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Comment deleted successfully
 *       404:
 *         description: Comment or blog post not found
 */
