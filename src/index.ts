export * from './core';
export * from './types';
export * from './hooks';

import { ZenonRouter } from "./core";
import { RouterOptions } from "./types";

let _instance: ZenonRouter | null = null;

export function createRouter(options: RouterOptions): ZenonRouter {
  if (_instance) return _instance;
  _instance = new ZenonRouter(options);
  return _instance;
}
