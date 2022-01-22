import { App } from "./App";
import dotenv from "dotenv";
import { UserController } from "./src/controllers/user/User.controller";

dotenv.config();

const app = new App([new UserController()], Number(process.env.PORT));
app.listen();