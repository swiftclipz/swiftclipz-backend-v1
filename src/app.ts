import express, { Application } from "express";
import expressWs from "express-ws";
import routes from "./routes";
import ErrorHandler from "./middlewares/error";

const app: Application = express();
expressWs(app);

app.use(express.json());
app.use("/api/v1", routes);
app.use(ErrorHandler);

export default app;
