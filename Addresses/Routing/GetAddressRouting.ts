import express from "express";
import { IRouter } from "../../Common/Routing/Router";
import { AddressService } from "../Models/AddressesService";

export class GetAddressRouting implements IRouter {
  AddRoute(route: any): void {
    route.get("/get/", async (req: express.Request, res: express.Response) => {
      const result = await new AddressService().GetAll();
      if (result) {
        res.json(result);
      } else {
        res.send("");
      }
    });
  }
}
