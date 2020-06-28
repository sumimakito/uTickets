import { CartUpdateAction, CART_UPDATE_ACTION } from "../actions/cart";
import { Ticket } from "../../models/tickets";

const initialState: CartState = {
  tickets: new Map<Ticket, number>(),
};

const cart = (state = initialState, action: CartUpdateAction) => {
  switch (action.type) {
    case CART_UPDATE_ACTION: {
      const tickets = new Map(state.tickets);
      if (action.count <= 0) tickets.delete(action.ticket);
      else tickets.set(action.ticket, action.count);
      return {
        ...state,
        tickets,
      };
    }
    default:
      return state;
  }
};

export interface CartState {
  tickets: Map<Ticket, number>;
}

export default cart;
