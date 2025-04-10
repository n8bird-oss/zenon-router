# 🛣️ Zenon Router

**Zenon Router** is a lightweight, zero-dependency JavaScript router designed for Single Page Applications (SPAs). It leverages the browser’s History API to provide clean, reload-free navigation.

---

## ✨ Features

- 🔁 **Singleton Pattern** – Ensures only one router instance
- 🧭 **Named and Path-Based Routing**
- 🔗 **History API Support** – Enables clean, bookmarkable URLs
- 📦 **Minimal & Dependency-Free**
- 🛠️ **Dynamic Route Addition**
- 🔍 **Automatic Route Resolution** on navigation and back/forward

---

## 📦 Installation

Choose your package manager:

```bash
npm install zenon-router
# or
yarn add zenon-router
# or
bun add zenon-router
```

---

## 🔧 Usage Guide

### Step 1: Import and Create the Router

```js
import { createRouter } from "zenon-router";

const router = createRouter({
  routes: [
    {
      name: "home",
      path: "/",
      component: () => {
        document.body.innerHTML = "<h1>Welcome Home</h1>";
      },
    },
    {
      name: "about",
      path: "/about",
      component: () => {
        document.body.innerHTML = "<h1>About Us</h1>";
      },
    },
  ],
});
```

### Step 2: Resolve the Initial Route

```js
router.resolveRoute(); // ⬅️ important! render the correct route on first load
```

### Step 3: Navigate Programmatically

```js
router.push("/about"); // Loads the 'about' component
```

---

## 🧩 API Reference

### `createRouter(options)`

Creates a singleton router instance.

**Options:**

```ts
{
  history?: "history", // default is "history"
  routes: Array<{
    name: string,
    path: string,
    component: Function
  }>
}
```

---

### `router.push(path)`

Navigate to a new path and render the corresponding component.

```js
router.push("/contact");
```

---

### `router.addRouter({ name, path, component })`

Dynamically add a new route at runtime.

```js
router.addRouter({
  name: "contact",
  path: "/contact",
  component: () => {
    document.body.innerHTML = "<h1>Contact Us</h1>";
  },
});
```

---

### `router.resolveRoute()`

Resolves the current path and renders the matching component. Automatically triggered on back/forward events (`popstate`), but must be manually called **once on page load**.

---

## 💡 Example

```js
import { createRouter } from "zenon-router";

const router = createRouter({
  routes: [
    {
      name: "home",
      path: "/",
      component: () => {
        document.body.innerHTML = "<h1>Home</h1>";
      },
    },
  ],
});

router.addRouter({
  name: "contact",
  path: "/contact",
  component: () => {
    document.body.innerHTML = "<h1>Contact Us</h1>";
  },
});

router.resolveRoute(); // Initial route resolution
router.push("/contact"); // Navigate to /contact
```

---

## 🧪 Local Development

To work on the Zenon Router itself:

```bash
git clone https://github.com/yourusername/zenon-router.git
cd zenon-router
npm install
```

You can then open a local `index.html` and play around with the router.

---

## 🧠 Inspiration

Zenon Router was created as a **learning-first** router core — easy to understand, lightweight, and flexible enough to extend.

---

## 📄 License

MIT — Use it freely in personal or commercial projects.

---

## 🙌 Contributing

Pull requests, ideas, and bug reports are welcome!

- Open issues [here]()
- Fork and submit PRs

---
