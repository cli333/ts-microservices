import express from "express";
import { Server } from "../Common/Server";
import { GetAddressRouting } from "./Routing/GetAddressRouting";
import { SaveAddressRouting } from "./Routing/SaveAddressRouting";

export class AddressServer extends Server {
  protected AddRouting(router: express.Router): void {
    this.routingEngine.Add(GetAddressRouting, router);
    this.routingEngine.Add(SaveAddressRouting, router);
  }
}

new AddressServer().WithCorsSupport().WithDatabase().Start();
