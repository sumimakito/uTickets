import { Ticket } from "../../models/tickets";

export const CART_UPDATE_ACTION = "CART_UPDATE_ACTION";

export type CartUpdateAction = {
  type: typeof CART_UPDATE_ACTION;
  ticket: Ticket;
  count: number;
};
