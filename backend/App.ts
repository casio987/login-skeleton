import cors from "cors";
import express, { Application } from "express";
import mongoose from "mongoose";
import { IRouter } from "./interfaces/IRouter";
import dotenv from "dotenv";

dotenv.config();
export class App {
  public express: Application;
  public port: number;

  constructor(routes: IRouter[], port: number) {
    this.express = express();
    this.port = port;

    this.initialiseMiddleware();
    this.initialiseRoutes(routes);
    this.initialiseDatabaseConnection();
    // TODO: will need method of checking if request body is valid - joi package?
    // this.initialiseErrorHandling();
  }

  private initialiseMiddleware = () => {
    this.express.use(cors());
    this.express.use(express.json());
    this.express.use(express.urlencoded({ extended: true }));
  }

  private initialiseRoutes = (routes: IRouter[]) => {
    routes.forEach((route: IRouter) => {
      this.express.use("/api", route.router);
    });
  }

  private initialiseDatabaseConnection = () => {
    mongoose.connect(process.env.MONGO_URI || "", () => {
      console.log("DB connected :)");
    });
  }

  // private initialiseErrorHandling = () => {

  // }

  public listen = () => {
    this.express.listen(this.port, () => {
      console.log(`server starting on port ${this.port}`);
    });
  }
}