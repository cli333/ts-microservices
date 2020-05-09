import express from "express";
import { IRouter } from "../../Common/Routing/Router";
import { LeadsService } from "../Models/LeadsService";

export class GetLeadsRouting implements IRouter {
  AddRoute(route: any): void {
    route.get("/get/", async (req: express.Request, res: express.Response) => {
      const result = await new LeadsService().GetAll();
      if (result) {
        res.json(result);
      } else {
        res.send("");
      }
    });
  }
}
