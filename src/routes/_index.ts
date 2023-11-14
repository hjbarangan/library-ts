import express from "express";
import bookRoutes from "./book.route";
import categoryRoutes from "./category.route";

export default function initRouter(app: express.Application) {
  app.use("/api", bookRoutes);
  app.use("/api", categoryRoutes);
}
