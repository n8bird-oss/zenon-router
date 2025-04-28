# ⚡ Zenon Router

**Zenon Router** is designed to be simple and fast, making it ideal for small-scale SPAs. It provides full control over routing with minimal overhead. It’s perfect for developers who want a router that just works and works efficiently..

## ✅ Features

- ⚡ **Blazing fast & minimal** – Zero dependencies
- ✅ **Type-safe** – Written in TypeScript with support for JavaScript
- 🧭 **History API-based routing** – `pushState` & `popstate` powered navigation
- 🔄 **Dynamic route registration** – Add routes at runtime
- 🔧 **Programmatic navigation** – `push`, `replace`, and `resolveRoute` methods

## 📦 Installation

```bash
npm install zenon-router
```

## 🛠️ Usage

### 1. Define your routes

```ts
const routes: Route[] = [
  {
    name: "home",
    path: "/",
    component: () => import("./pages/Home.js")
  },
  {
    name: "about",
    path: "/about",
    component: () => import("./pages/About.js")
  },
];
```

### 2. Initialize the router

```ts
import { createRouter, Route } from "zenon-router";

const router = createRouter({ 
  history: "history", 
  routes, 
});

router.resolveRoute(); // Call once on page load to resolve current route
```

### 3. Navigate programmatically

```ts
router.push("/about"); // Changes URL and loads the About page
router.replace("/home"); // Replaces the current history state with the Home page
```

### 4. Access a route by path or name

```ts
const homeRoute = router.getRouteByPath("/"); // Get route by path
const aboutRoute = router.getRouteByName("about"); // Get route by name
```

## 📘 API Reference

### `createRouter(options: RouterOptions): ZenonRouter`

Creates and returns an instance of the router.

```ts
interface RouterOptions {
  history?: "hash" | "history"; // Default is "history"
  routes: Route[];
}
```

### `Route`

```ts
interface Route {
  name: string;
  path: string;
  component: () => Promise<{ default: () => void | string }>;
  meta?: Record<string, any>;
  _segments?: string[];
  _paramKeys?: string[];
}
```

### Router Methods

| Method                    | Description                                           |
|---------------------------|-------------------------------------------------------|
| `push(path: string)`       | Navigate to a path programmatically                   |
| `replace(path: string)`    | Navigate to a path programmatically, replacing the current state |
| `addRoute(route: Route)`   | Dynamically register a new route                     |
| `getRouteByPath(path: string)` | Retrieve a route by its path                        |
| `getRouteByName(name: string)` | Retrieve a route by its name                        |
| `resolveRoute()`           | Resolves the current URL and triggers the component   |

## 🚧 Roadmap

Upcoming features include:

- 🔀 Hash-based routing
- 🔒 Navigation guards
- 🧭 Named route navigation

## 🤝 Contributing

We welcome contributions! If you'd like to contribute, please refer to the [CONTRIBUTING.md](./CONTRIBUTING.md) file for guidelines.

## 📄 License

This project is licensed under the [MIT License](./LICENSE).

---
