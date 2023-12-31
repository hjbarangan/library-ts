import express from "express";
import bookRoutes from "./book.route";
import categoryRoutes from "./category.route";
import userRoutes from "./user.route";
import publisherRoutes from "./publisher.route";


export default function initRouter(app: express.Application) {
  
  app.use("/api", bookRoutes);
  app.use("/api", categoryRoutes);
  app.use("/api", userRoutes);
  app.use("/api", publisherRoutes);
}
