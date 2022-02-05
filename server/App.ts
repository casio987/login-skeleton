import cors from "cors";
import express, { Application } from "express";
import mongoose from "mongoose";
import { IController } from "./src/interfaces/IController";
import dotenv from "dotenv";
import { ErrorMiddleware } from "./src/middleware/Error.middleware";

dotenv.config();
export class App {
public express: Application;
  public port: number;

  constructor(controllers: IController[], port: number) {
    this.express = express();
    this.port = port;

    this.initialiseMiddleware();
    this.initialiseControllers(controllers);
    this.initialiseDatabaseConnection();
    this.initialiseErrorHandling();
  }

  private initialiseMiddleware = () => {
    this.express.use(cors());
    this.express.use(express.json());
    this.express.use(express.urlencoded({ extended: true }));
  }

  private initialiseControllers = (controllers: IController[]) => {
    controllers.forEach((controller: IController) => {
      this.express.use("/api", controller.getRouter());
    });
  }

  private initialiseDatabaseConnection = () => {
    mongoose.connect(process.env.MONGODB_URI || "", () => {
      console.log("DB connected :)");
    });
  }

  private initialiseErrorHandling = () => {
    this.express.use(ErrorMiddleware);
  }

  public listen = () => {
    this.express.listen(this.port, () => {
      console.log(`server starting on port ${this.port}`);
    });
  }
}