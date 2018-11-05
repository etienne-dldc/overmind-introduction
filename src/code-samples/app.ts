import { Overmind, TApp } from "overmind";

const config = {
  state,
  effects,
  actions
};

declare module "overmind" {
  interface IApp extends TApp<typeof config> {}
}

export const app = new Overmind(config);
