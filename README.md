# Zenon Router

![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)

Zenon is a minimalist, high-performance JavaScript router designed for modern web applications. Built for simplicity, it offers dynamic routing capabilities with full integration into the browser’s History API, ensuring smooth and fast navigation. Zenon provides an intuitive API for route management, making it an excellent choice for developers looking to implement custom routing solutions without the overhead of larger frameworks.

## Key Features

- **Lightweight & Fast**: Optimized for performance with minimal footprint.
- **Dynamic Routing**: Add or modify routes at runtime with ease.
- **History API Integration**: Fully supports browser history, enabling seamless navigation.
- **No Dependencies**: Pure JavaScript, no external libraries required.
- **Easy-to-Use API**: A simple, declarative interface for routing configuration and management.

## Installation

To integrate Zenon into your project, install it via npm:

```bash
npm install zenon-router
```

Alternatively, you can use it via a CDN or directly within your project by importing the module.

```js
import { zenon } from 'zenon-router';
```

## Usage

Zenon is easy to get started with. Here's a basic example of how to initialize the router and define routes:

### 1. Initialize the Router

Create a new instance of the `zenon` router by providing a configuration object containing your routes.

```js
import { zenon } from 'zenon-router';

const router = new zenon({
  history: 'history',  // Optional: future support for different history modes
  routes: [
    {
      name: 'home',
      path: '/',
      component: () => { console.log('Home Route'); }
    },
    {
      name: 'about',
      path: '/about',
      component: () => { console.log('About Route'); }
    }
  ]
});
```

### 2. Navigating Between Routes

To navigate to a different route, use the `push()` method, passing the path of the route to navigate to.

```js
router.push('/about'); // Navigates to the about page
```

### 3. Dynamically Adding Routes

You can add new routes dynamically using the `addRouter()` method:

```js
router.addRouter({
  name: 'contact',
  path: '/contact',
  component: () => { console.log('Contact Route'); }
});
```

### 4. Handling Browser Navigation

Zenon listens for browser navigation events (e.g., back/forward buttons) and resolves the appropriate route automatically:

```js
window.addEventListener('popstate', () => {
  router.resolveRoute();
});
```

### 5. Resolving Routes

You can manually trigger the resolution of the current route using the `resolveRoute()` method, which will invoke the corresponding route handler.

```js
router.resolveRoute();
```

## API Reference

### `constructor({ history, routes })`

The constructor initializes the router with a configuration object.

- **history** (optional): Specifies the history mode (defaults to `"history"`). Future versions may support different modes (e.g., hash-based routing).
- **routes**: An array of route objects, each containing:
  - **name**: A unique identifier for the route.
  - **path**: The URL path for the route.
  - **component**: A function executed when the route is matched.

### `addRouter({ name, path, component })`

Dynamically adds a new route to the router.

- **name**: The name of the route (string).
- **path**: The URL path for the route (string).
- **component**: A function that gets executed when the route is navigated to.

Throws an error if any of the parameters are invalid.

### `push(path)`

Navigates to a specific route by updating the browser's history and resolving the route.

- **path**: The path to navigate to (string).

### `resolveRoute()`

Resolves the current route based on the browser's path and invokes the corresponding component.

## Example

```js
const router = new zenon({
  routes: [
    {
      name: 'home',
      path: '/',
      component: () => { console.log('Welcome to Home!'); }
    },
    {
      name: 'about',
      path: '/about',
      component: () => { console.log('About Us!'); }
    }
  ]
});

// Navigate to the home route
router.push('/');

// Dynamically add a new route
router.addRouter({
  name: 'contact',
  path: '/contact',
  component: () => { console.log('Contact Us!'); }
});

// Navigate to the contact route
router.push('/contact');
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

---

## Contributing

Zenon is open for contributions! Feel free to fork the repository, open issues, and submit pull requests. Whether you’re fixing bugs, improving documentation, or adding new features, all contributions are welcome.

---

## Acknowledgements

Zenon was built with simplicity and performance in mind, providing developers with a flexible, efficient solution for routing in single-page applications.

---