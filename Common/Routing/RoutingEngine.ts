import { IRouter } from "./Router";

export class RoutingEngine {
  constructor(private routing: IRouter[] = []) {}

  public Add<T extends IRouter>(routing: new () => T, route: any) {
    const routed = new routing();
    routed.AddRoute(route);
    this.routing.push(routed);
  }
}
