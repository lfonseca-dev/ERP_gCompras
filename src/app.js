import express from "express";
import cors from "cors";
import routes from "./routes/index.js";
import { errorMiddleware } from "./core/middlewares/error.middleware.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("API is running!");
});

app.use(routes);
app.use(errorMiddleware);

export default app;