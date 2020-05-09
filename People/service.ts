import express from "express";
import { Server } from "../Common/Server";
import { GetPeopleRouting } from "./Routing/GetPeopleRouting";
import { SavePeopleRouting } from "./Routing/SavePeopleRouting";

export class PeopleServer extends Server {
  protected AddRouting(router: express.Router): void {
    this.routingEngine.Add(GetPeopleRouting, router);
    this.routingEngine.Add(SavePeopleRouting, router);
  }
}

new PeopleServer().WithCorsSupport().WithDatabase().Start();
