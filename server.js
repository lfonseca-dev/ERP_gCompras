import express from "express";
import "dotenv/config";
import app from "./src/app.js";

const server = express();

server.use(app);

const PORT = process.env.API_PORT ?? 3000;

app.listen(PORT, () => {
    console.log(`API: http://localhost:${PORT}`);
});