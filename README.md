# ⚡ Zenon Router

**Zenon Router** is a lightweight, TypeScript-first client-side router designed for single-page applications (SPAs) built with **vanilla JavaScript or TypeScript**. It uses the HTML5 History API to provide clean, modern routing without external dependencies.

## ✅ Features

- ⚡ **Blazing fast & minimal** – Zero dependencies
- ✅ **Type-safe** – Written in TypeScript with support for JavaScript projects
- 🧭 **History API-based routing** – `pushState` & `popstate` powered navigation
- 🔌 **Framework-agnostic** – Works with plain JS or TS (not tied to any UI library)
- 🔄 **Dynamic route registration** – Add routes at runtime

## 📦 Installation

```bash
npm install zenon-router
```

## 🛠️ Usage

### 1. Define your routes

```ts

const routes = [
  {
    name: "home",
    path: "/",
    component: () => {
      document.body.innerHTML = "<h1>Home Page</h1>";
    },
  },
  {
    name: "about",
    path: "/about",
    component: () => {
      document.body.innerHTML = "<h1>About Page</h1>";
    },
  },
];
```

### 2. Initialize the router

```ts
import { createRouter } from "zenon-router";

const router = createRouter({ routes });

router.resolveRoute(); // Call once on page load
```

### 3. Navigate programmatically

```ts
router.push("/about"); // Changes URL and loads the About page
```

## 📘 API Reference

### `createRouter(options: RouterOptions): zenon`

Creates and returns an instance of the router.

```ts
interface RouterOptions {
  history?: "history"; // default
  routes?: Route[];
}
```

### `Route`

```ts
interface Route {
  name?: string;
  path: string;
  component: () => void;
}
```

### Router Methods

| Method                    | Description                                           |
|---------------------------|-------------------------------------------------------|
| `push(path: string)`      | Navigate to a path programmatically                   |
| `addRouter(route: Route)` | Dynamically register a new route                     |
| `resolveRoute()`          | Resolves the current URL and triggers the component   |

## 🧠 Philosophy

Zenon Router is built for simplicity. Whether you're prototyping or building a small production SPA, it gives you full control without unnecessary overhead. Perfect for developers who want a routing system that just works, and works fast.

## 🚧 Roadmap

These features are on the way:

- 🔀 Hash-based routing
- 🔒 Navigation guards
- 🧭 Named route navigation
- 🔁 Middleware or lifecycle hooks

## 🤝 Contributing

We welcome contributions! If you'd like to contribute, please read the [CONTRIBUTE.md](./CONTRIBUTING.md) file for guidelines on how to get started.

## 📄 License

This project is licensed under the [MIT License](./LICENSE).
