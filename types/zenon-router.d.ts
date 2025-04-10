declare module 'zenon-router' {
  interface Route {
    name: string;
    path: string;
    component: () => void;
  }

  interface RouterOptions {
    history?: string;
    routes?: Route[];
  }

  export default function createRouter(options: RouterOptions): {
    push(path: string): void;
    addRouter(route: Route): void;
    resolveRoute(): void;
  };
}
