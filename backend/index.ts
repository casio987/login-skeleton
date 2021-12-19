import { App } from "./App";
import dotenv from "dotenv";

dotenv.config();

const app = new App([], Number(process.env.APP_PORT));
app.listen();