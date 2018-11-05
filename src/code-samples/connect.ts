import {
  TConnect,
  createConnect
} from "overmind-react";

const app = new Overmind /*  */();

export type Connect = TConnect<typeof app>;

export const connect = createConnect(app);
