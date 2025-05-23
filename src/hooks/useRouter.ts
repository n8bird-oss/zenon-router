import { ZenonRouter } from "../core/index";

let _router: ZenonRouter | null = null;

export function useRouter(): ZenonRouter {
  if (!_router) throw new Error("Router has not been provided.");
  return _router;
}