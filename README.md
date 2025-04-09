# Zenon Router 🛣️

Zenon Router is a zero-dependency JavaScript router for SPAs. It uses the browser's history API for clean, reload-free navigation.


## ✨ Features

- 🔁 **Singleton Pattern** – Prevents multiple router instances
- 🧭 **Named and Path-Based Routing**
- 🔗 **History API** – Enables clean, navigable URLs
- 📦 **Lightweight** – No third-party dependencies
- 🛠️ **Dynamic Route Addition**
- 🔍 **Automatic Route Resolution** on navigation and `popstate` events

<br>

## 📦 Installation

You can install it using npm:

```bash
npm install zenon-router
```

Or if you prefer yarn:

```bash
yarn add zenon-router
```

Or if you prefer bun:

```bash
bun add zenon-router
```

<br>

## 🔧 How to Use

### Step 1: Import and set up

```js
import { createRouter } from "zenon-router";

const router = createRouter({
  history: "history", // optional, default is "history"
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

### Step 2: Navigate to a route

```js
router.push("/about");
```

The `about` component will run and update your UI.

<br>

## 🧩 API Breakdown

### `createRouter(options)`

This sets up the router. It returns a single (singleton) router instance.

**Options:**

- `history` – (optional) for now it just accepts `"history"`
- `routes` – array of objects like:

```js
{
  name: "route-name",
  path: "/some-path",
  component: () => {
    // your UI logic here
  }
}
```

---

### `router.push(path)`

Moves the browser to that path and loads the route component.

---

### `router.addRouter({ name, path, component })`

You can use this if you want to add more routes later after the initial setup.

---

### `router.resolveRoute()`

Finds the current path and runs the matching component. It's called automatically when the page loads or the user presses back/forward.

<br>

## 💡 Example

```js
router.addRouter({
  name: "contact",
  path: "/contact",
  component: () => {
    document.body.innerHTML = "<h1>Contact Us</h1>";
  },
});

router.push("/contact");
```

<br>

## 🧪 Running Locally

If you're working on the library itself:

```bash
git clone https://github.com/yourusername/zenon-router.git
cd zenon-router
npm install
```

You can then open an `index.html` file and play with it.


## 🧠 Inspiration
Zenon was built to provide a learning-focused, customizable router core — simple enough to understand, powerful enough to extend.



## 📄 License

MIT — You’re free to use it, modify it, and share it.



## 🙌 Contribute

Pull requests, suggestions, and issues are welcome!
Open an issue [here]() or fork the repo and submit a PR.