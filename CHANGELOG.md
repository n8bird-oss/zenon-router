# Changelog

## [1.2.0] - 2025-04-28

### Added:

- **Asynchronous Component Loading**:  
  - Route components are now lazily loaded asynchronously to improve user experience by reducing initial load time.
  
### Changed:
- **Error Handling for Component Loading**:  
  - Implemented error handling for asynchronous component loading. In case of failure, users see a fallback message: "Failed to load page. Try again later."
  
- **Flexible Component Rendering**:  
  - Updated the route component rendering logic to support both functions and HTML strings as valid return types.

### Fixed:
- **Route Resolution Fixes**:  
  - Fixed issues where routes were not properly loaded due to improper handling of asynchronous components. Now the router gracefully handles asynchronous loading and displays components correctly.
  
- **Improved Route Management**:  
  - Enhanced management of routes for both **history** and **hash** modes. Improved dynamic route navigation with `push` and `replace` methods.

## [1.1.1] - 2025-04-20

### Added:
- **Basic Router Functionality**:  
  - Implemented basic routing using `zenon-router`. Supports history mode routing.
  
- **Basic Error Handling**:  
  - Simple error handling for undefined routes, displaying an error message when a route is not found.

### Fixed:
- **Route Component Management**:  
  - Fixed some issues with the proper rendering of route components by handling route registration more efficiently.
  
- **History Push/Replace**:  
  - Fixed issues with the `push` and `replace` methods that handle dynamic navigation between routes.

## [1.0.0] - 2025-04-10

### Initial Release:
- **Core Router Functionality**:  
  - Introduced the basic version of `zenon-router` with support for routes, including push navigation and basic route resolution using `history` mode.
  
- **Basic Routing Setup**:  
  - Allowed developers to define routes with paths and components that render upon navigation.

- **Basic Type Definitions**:  
  - Defined types for routes and router options to ensure type safety and provide basic structure for the routing system.
