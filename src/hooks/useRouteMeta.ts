import { useRoute } from "./useRoute";

export function useRouteMeta(): Record<string, any> {
  const route = useRoute();
  return route?.meta || {};
}