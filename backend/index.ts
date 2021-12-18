import { App } from "./App";
import dotenv from "dotenv";

// TODO: cleaner way of getting env variables?
dotenv.config({
  path: ".env"
});

const app = new App([], Number(process.env.APP_PORT));
app.listen();