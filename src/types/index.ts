export interface Route {
  name: string;
  path: string;
  component: () => Promise<{ default: () => void | string }>;
  meta?: Record<string, any>;

  _segments?: string[];
  _paramKeys?: string[];
}
export interface RouterOptions {
  history?: "hash" | "history";
  routes: Route[];
}
