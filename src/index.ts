import express, { Express, Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import initRouter from "./routes/_index";
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { options } from "./swagger.config";

dotenv.config();

const app: Express = express();
const port: string = process.env.PORT || "3000";

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server - LIBRARY API");
});
app.use(cors());
app.use(express.json());
const specs = swaggerJsdoc(options);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
initRouter(app);



app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at port ${port}`);
});
