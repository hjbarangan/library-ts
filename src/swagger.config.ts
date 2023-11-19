// swagger.config.js
const options = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'Your API Documentation',
        version: '1.0.0',
        description: 'Documentation for your API',
      },
      servers: [
        {
          url: ['http://localhost:3000'], // Update with your server URL
          
        },
      ],
    },
    apis: ["../src/controllers/book.controller.ts"], // Update with the path to your controller file
  };
  
export {options};
  