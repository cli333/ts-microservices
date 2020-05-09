import express from "express";
import { IRouter } from "../../Common/Routing/Router";
import { IAddress } from "../Models/Addresses";
import { AddressService } from "../Models/AddressesService";

// save address send from client
// cast to an IAddress
// save to AddressService

export class SaveAddressRouting implements IRouter {
  AddRoute(route: any): void {
    route.post("/add/", (req: express.Request, res: express.Response) => {
      const person: IAddress = <IAddress>{ ...req.body };
      new AddressService().Save(person);
      res.json(person);
    });
  }
}
