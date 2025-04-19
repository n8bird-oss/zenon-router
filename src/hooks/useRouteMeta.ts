import { useCurrentRoute } from "./useCurrentRoute";

export function useRouteMeta(): Record<string, any> {
  const route = useCurrentRoute();
  return route?.meta || {};
}