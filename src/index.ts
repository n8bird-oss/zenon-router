import { Zenon } from "./core/index";
import { RouterOptions } from "./types/index";

let _instance: Zenon | null = null;

export function createRouter(options: RouterOptions): Zenon {
  if (_instance) {
    return _instance;
  }

  _instance = new Zenon(options);
  return _instance;
}
