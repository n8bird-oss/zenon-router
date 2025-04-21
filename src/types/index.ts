export interface Route {
  name: string;
  path: string;
  component: () => void;
  meta?: Record<string, any>;

  // Internal use
  _segments?: string[];
  _paramKeys?: string[];
}

export interface RouterOptions {
  history?: "hash" | "history";
  routes: Route[];
}
