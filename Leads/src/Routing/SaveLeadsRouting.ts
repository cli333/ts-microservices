import express from "express";
import { IRouter } from "../../Common/Routing/Router";
import { ILeads } from "../Models/Leads";
import { LeadsService } from "../Models/LeadsService";

export class SaveLeadsRouting implements IRouter {
  AddRoute(route: any): void {
    route.post("/add/", (req: express.Request, res: express.Response) => {
      const person: ILeads = <ILeads>{ ...req.body };
      new LeadsService().Save(person);
      res.json(person);
    });
  }
}
