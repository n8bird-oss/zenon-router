import { Route, RouterOptions } from "../types";

export class Zenon {
  private nameToRoute = new Map<string, Route>();
  private pathToRoute = new Map<string, Route>();
  private historyMode: "history";

  constructor({ history = "history", routes = [] }: RouterOptions) {
    this.historyMode = history;

    routes.forEach((route) => this.addRouter(route));

    if (typeof window !== "undefined") {
      window.addEventListener("popstate", this.resolveRoute.bind(this));
    }
  }

  public addRouter(route: Route): void {
    const { name, path, component } = route;

    if (
      typeof name !== "string" ||
      typeof path !== "string" ||
      typeof component !== "function"
    ) {
      throw new Error("Name, path, and component must be provided.");
    }

    this.nameToRoute.set(name, route);
    this.pathToRoute.set(path, route);
  }

  public push(path: string): void {
    if (typeof window !== "undefined") {
      history.pushState({}, "", path);
      this.resolveRoute();
    }
  }

  public resolveRoute(): void {
    if (typeof window === "undefined") return;

    const path = window.location.pathname;
    const route = this.pathToRoute.get(path);

    if (route) {
      route.component();
    } else {
      window.document.body.innerHTML = `<h1><i>No route found for: ${path}</i></h1>`;
      console.error(`No route found for: ${path}`);
    }
  }
}
