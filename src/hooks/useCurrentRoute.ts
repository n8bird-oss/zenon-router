import { useRouter } from "./useRouter";
import { Route } from "../types";

export function useCurrentRoute(): Route | null {
  const router = useRouter();
  const path = window.location.pathname;
  return router.getRouteByPath(path);
}
