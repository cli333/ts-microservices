import { IRouter } from "./Router";

export class RoutingEngine {
  constructor(private routing: IRouter[] = []) {}

  // accept a generic type
  // when 'new' called on it, returns an instance of that type
  // "route" comes from express
  public Add<T extends IRouter>(routing: new () => T, route: any) {
    // create new generic type
    const routed = new routing();
    routed.AddRoute(route);
    this.routing.push(routed);
  }
}
