import express, { Application } from "express";
import { IRouter } from "./interfaces/IRouter";

export class App {
  public express: Application;
  public port: number;

  constructor(routes: IRouter[], port: number) {
    this.express = express();
    this.port = port;

    this.initialiseMiddleware();
    this.initialiseRoutes();
    this.initialiseDatabaseConnection();
    this.initialiseErrorHandling();
  }

  private initialiseMiddleware = () => {

  }

  private initialiseRoutes = () => {

  }

  private initialiseDatabaseConnection = () => {

  }

  private initialiseErrorHandling = () => {

  }

  public listen = () => {
    this.express.listen(this.port, () => {
      console.log(`server starting on port ${this.port}`);
    });
  }
}