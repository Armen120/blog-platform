# Basic Blog Platform

This project is a basic blog platform backend implemented in Node.js using Express.js and MongoDB with Mongoose. It provides functionalities for user authentication, CRUD operations on blog posts, and commenting on blog posts.

## Table of Contents
- [Features](#features)
- [Structure](#structure)
- [Technologies](#technologies)
- [Setup](#setup)
- [Documentation](#documentation)

## Features
- User authentication (register, login, logout)
- CRUD operations on blog posts (create, read, update, delete)
- Commenting on blog posts
- RESTful API design
- Input validation and error handling

## Structure
project-root
|-- controllers
|   |-- blogController.js
|   |-- commentController.js
|   |-- userController.js
|-- exeptions
|   |-- apiError.js
|-- models
|   |-- blogModel.js
|   |-- commentModel.js
|   |-- userModel.js
|-- routes
|   |-- router.js
|-- middlewares
|   |-- authMiddleware.js
|   |-- errorMiddleware.js
|   |-- validation.js
|-- service
|   |-- blogService.js
|   |-- commentService.js
|   |-- tokenService.js
|   |-- userService.js
|-- .env.example
|-- documentation.js
|-- index.js
|-- package-lock.json
|-- package.json
|-- README.md
|-- swagger.js
 

## Technologies
- Node.js
- Express.js
- MongoDB with Mongoose
- JSON Web Tokens (JWT)
- Bcrypt 
- cookie-parser 
- express-validator 
- swagger-jsdoc 
- swagger-ui-express 
- dotenv

## Setup
1. Clone the repository: `git clone `
2. Install dependencies: `npm install`
3. Set up your MongoDB database and update the connection string in `index.js`
4. Run the application: `npm start`

## Documentation
**For documentation open localhost in your browser and give it /api-docs enpoint**   

 