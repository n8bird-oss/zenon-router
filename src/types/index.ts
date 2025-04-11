export interface Route {
  name?: string;
  path: string;
  component: () => void;
}

export interface RouterOptions {
  history?: "history";
  routes?: Route[];
}
