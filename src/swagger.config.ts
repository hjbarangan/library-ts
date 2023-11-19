import swaggerJsdoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "UI/UX UPSKILL: Library API",
      version: "1.0.0",
      description: "API documentation for the Library application",
    },
    components: {
      schemas: {
        Book: {
          type: "object",
          properties: {
            isbn: { type: "string" },
            publication_year: { type: "integer" },
            publisher_id: { type: "integer" },
            title: { type: "string" },
            author: { type: "string" },
            category_id: { type: "integer" },
            pages: { type: "integer" },
            status: { type: "string" },
          },
        },
      },
    },
  },
  apis: ["./src/routes/*.ts"],
};

const swaggerSpec = swaggerJsdoc(options);

export default swaggerSpec;
