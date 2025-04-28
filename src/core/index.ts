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
    }
  }

  public addRoute(route: Route): void {
    const { name, path, component } = route;

    if (!name || !path || typeof component !== "function") {
      console.log(`Invalid route: ${JSON.stringify(route)}`);
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
  }

  public replace(path: string): void {
    if (!isWindowAvailable) return;

    if (this.historyMode === "history") {
      history.replaceState({}, "", path);
    } else {
      window.location.hash = path;
    }
  }

  public getRouteByPath(path: string): Route | null {
    return this.pathToRoute.get(path) || null;
  }

  public getRouteByName(name: string): Route | null {
    return this.nameToRoute.get(name) || null;
  }

  public async resolveRoute(): Promise<void> {
    if (!isWindowAvailable) return;
  
    const path = window.location.pathname;
    const route = this.pathToRoute.get(path);
  
    if (route) {
      try {
        const module = await route.component();
        const rendered = module.default;
  
        if (typeof rendered === "function") {
          rendered();
        } else if (typeof rendered === "string") {
          const app = document.querySelector("#app");
          if (app) {
            app.innerHTML = rendered;
          }
        } else {
          console.error("Unsupported export in route component:", rendered);
        }
      } catch (error) {
        console.error("Failed to load route component:", error);
        window.document.body.innerHTML = `<i>Failed to load page. Try again later.</i>`;
      }
    } else {
      window.document.body.innerHTML = `<i>No route found for <b>${path}</b></i>`;
      console.error(`No route found for: ${path}`);
    }
  }  
}