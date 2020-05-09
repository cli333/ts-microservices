import express from "express";
import { IRouter } from "../../Common/Routing/Router";
import { PeopleService } from "../Models/PeopleService";
import { IPerson } from "../Models/People";

export class SavePeopleRouting implements IRouter {
  AddRoute(route: any): void {
    route.get("/get/", async (req: express.Request, res: express.Response) => {
      const person: IPerson = <IPerson>{ ...req.body };
      new PeopleService().Save(person);
      res.json(person);
    });
  }
}
