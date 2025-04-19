import { useCurrentRoute } from "./useCurrentRoute";

export function useRouteComponent(): (() => void) | null {
  const route = useCurrentRoute();
  return route?.component || null;
}