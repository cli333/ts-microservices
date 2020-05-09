import express from "express";
import { IRouter } from "../../Common/Routing/Router";
import { PeopleService } from "../Models/PeopleService";

export class GetPeopleRouting implements IRouter {
  AddRoute(route: any): void {
    route.get("/get/", async (req: express.Request, res: express.Response) => {
      const result = await new PeopleService().GetAll();
      if (result) {
        res.json(result);
      } else {
        res.send("");
      }
    });
  }
}
