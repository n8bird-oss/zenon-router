import { Route, RouterOptions } from "../types";


const isWindowAvailable = typeof window !== "undefined";

export class ZenonRouter {
  private nameToRoute = new Map<string, Route>();
  private pathToRoute = new Map<string, Route>();
  private historyMode: "history" | "hash";

  constructor({ history = "history", routes = [] }: RouterOptions) {
    this.historyMode = history;

    routes.forEach((route) => this.addRoute(route));
    if (isWindowAvailable) {
      window.addEventListener("popstate", this.resolveRoute.bind(this));
      this.resolveRoute();
    }
  }

  public addRoute(route: Route): void {
    const { name, path, component } = route;

    if (!name || !path || typeof component !== "function") {
      throw new Error("Invalid route. Expected name, path, and component.");
    }

    this.nameToRoute.set(name, route);
    this.pathToRoute.set(path, route);
  }

  public push(path: string): void {
    if (!isWindowAvailable) return;

    if (this.historyMode === "history") {
      history.pushState({}, "", path);
    } else {
      window.location.hash = path;
    }

    this.resolveRoute();
  }

  public replace(path: string): void {
    if (!isWindowAvailable) return;

    if (this.historyMode === "history") {
      history.replaceState({}, "", path);
    } else {
      window.location.hash = path;
    }

    this.resolveRoute();
  }

  public resolveRoute(): void {
    if (!isWindowAvailable) return;

    const path = window.location.pathname;
    const route = this.pathToRoute.get(path);

    if (route) {
      route.component();
    } else {
      window.document.body.innerHTML = `<i>No route found for <b>${path}</b></i>`;
      console.error(`No route found for: ${path}`);
    }
  }
}
