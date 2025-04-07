let _instance

function zenRouter(options) {
  if (_instance) {
    return _instance;
  }

  _instance = new zenon(options);
  return _instance
}

class zenon {
  constructor({ history, routes }) {
    this.nameToRoute = new Map();
    this.pathToRoute = new Map();
    this.history = history || "history";
    if (Array.isArray(routes)) {
      routes.forEach(({ name, path, component }) => this.addRouter({ name, path, component }));
    }
    if (typeof window !== "undefined") {
      window.addEventListener("popstate", this.resolveRoute.bind(this));
    }
  }

  addRouter({ name, path, component }) {
    if (typeof name !== "string" || typeof path !== "string" || typeof component !== "function") {
      throw new Error("Name, path, and component must be provided.");
    }
    const route = { name, path, component };
    this.nameToRoute.set(name, route);
    this.pathToRoute.set(path, route);
  }

  push(path) {
    if (typeof window !== "undefined") {
      history.pushState({}, "", path);
      this.resolveRoute();
    }
  }

  resolveRoute() {
    if (typeof window === "undefined") return;
    const path = window.location.pathname;
    const route = this.pathToRoute.get(path);
    if (route) {
      route.component();
    } else {
      console.error(`No route found for: ${path}`);
    }
  }
}

export default zenRouter;