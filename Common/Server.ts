import express from "express";
import { RoutingEngine } from "./Routing/RoutingEngine";
import cors from "cors";
import firebase from "firebase";
import environment from "./environment";

export abstract class Server {
  constructor(
    private port: number = 5000,
    private app: any = express(),
    protected routingEngine: RoutingEngine = new RoutingEngine()
  ) {}

  public WithCorsSupport(): Server {
    this.app.use(cors());
    return this;
  }

  public Start(): void {
    this.app.use(express.json());
    const router: express.Router = express.Router();
    this.AddRouting(router);
    this.app.use(router);
    this.app.listen(this.port, () =>
      console.log(`Listening on port ${this.port}`)
    );
  }

  protected AddRouting(router: express.Router): void {}

  public WithDatabase(): Server {
    firebase.initializeApp(environment.firebase);
    return this;
  }
}
