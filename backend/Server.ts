import express from "express";
import dotenv from "dotenv";

dotenv.config({
  path: ".env"
});

const app = express();
const server = app.listen(process.env.APP_PORT, () => {
  console.log(`server starting on port ${process.env.APP_PORT}`)
});

export default server;
