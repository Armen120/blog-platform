export const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Basic Blog Platform API',
      version: '1.0.0',
      description: 'API documentation for a basic blog platform with Node.js and MongoDB',
    },
    servers: [{ url: `http://localhost:${process.env.PORT}` }],

    tags: [
      { name: 'Authentication', description: 'User authentication operations' },
      { name: 'BlogPosts', description: 'Operations related to blog posts' },
      { name: 'Comments', description: 'Operations related to comments' },
    ],
  },
  apis: ['./documentation.js'],
  components: {
    securitySchemes: {
      BearerAuth: {
        type: 'http',
        scheme: 'Bearer',
        bearerFormat: 'JWT',
      },
    },
  },
 
};
 