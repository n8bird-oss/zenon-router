import { zenon } from "./core/index";
import { RouterOptions } from "./types/index";

let _instance: zenon | null = null;

export function createRouter(options: RouterOptions): zenon {
  if (_instance) {
    return _instance;
  }

  _instance = new zenon(options);
  return _instance;
}
