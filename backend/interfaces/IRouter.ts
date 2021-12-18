import { Router } from "express";

export interface IRouter {
  path: String;
  router: Router;
}