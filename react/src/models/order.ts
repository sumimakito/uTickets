export type Order = {
  email: string;
  tickets: { type: string; data: { [_: string]: any } }[];
};
