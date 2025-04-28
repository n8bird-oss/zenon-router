import { useRoute } from "./useRoute";

export function useRouteParams(): Record<string, string> {
  const route = useRoute();
  const pathSegments = window.location.pathname.split("/");
  const params: Record<string, string> = {};

  if (route?.path.includes(":")) {
    const routeSegments = route.path.split("/");
    routeSegments.forEach((segment, i) => {
      if (segment.startsWith(":")) {
        const key = segment.slice(1);
        params[key] = pathSegments[i];
      }
    });
  }
  return params;
}