export function useIsActiveRoute(path: string): boolean {
  return window.location.pathname === path;
}