import { App } from "./App";
import dotenv from "dotenv";
import { UserController } from "./controllers/user/User.controller";

dotenv.config();

const app = new App([new UserController()], Number(process.env.APP_PORT));
app.listen();