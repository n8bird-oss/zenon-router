class zenon {
  /**
   * Initializes the router with a set of routes and history mode.
   * @param {Object} options - Router configuration.
   * @param {string} [options.history="history"] - History mode (future support).
   * @param {Array} options.routes - Array of route objects.
   */
  constructor({ history, routes }) {
    this.routes = {};
    this.history = history || "history"; // Support different history modes (Future)
    
    // Add routes from config
    if (Array.isArray(routes)) {
      routes.forEach(({ name, path, component }) => this.addRouter({ name, path, component }));
    }

    // Handle browser navigation
    if (typeof window !== "undefined") {
      window.addEventListener("popstate", this.resolveRoute.bind(this));
    }
  }

  /**
   * Adds a new route dynamically.
   * @param {Object} route - Route object.
   * @param {string} route.name - Unique name of the route.
   * @param {string} route.path - URL path of the route.
   * @param {Function} route.component - Function to execute when the route is visited.
   * @throws {Error} Throws an error if parameters are not valid.
   */
  addRouter({ name, path, component }) {
    if (typeof name !== "string" || typeof path !== "string" || typeof component !== "function") {
      throw new Error("Name, path, and component must be provided.");
    }

    this.routes[name] = { path, component };
    this.routes[path] = { name, component };
  }

  /**
   * Navigates to a new route.
   * @param {string} path - The path to navigate to.
   */
  push(path) {
    if (typeof window !== "undefined") {
      history.pushState({}, "", path);
      this.resolveRoute();
    }
  }

  /**
   * Resolves the current route and executes its component function.
   */
  resolveRoute() {
    if (typeof window === "undefined") return;

    const path = window.location.pathname;
    const handler = this.routes[path];

    if (handler) {
      handler.component();
    } else {
      console.error(`No route found for: ${path}`);
    }
  }
}

export default zenon;