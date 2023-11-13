import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import bookRoutes from "./routes/book.route";

dotenv.config();

const app: Express = express();
const port: string = process.env.PORT || "3000";

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.use("/api", bookRoutes);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at port ${port}`);
});
