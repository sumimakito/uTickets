import { TicketAction, TICKET_LOADING_ACTION, TICKET_UPDATE_ACTION } from "../actions/tickets";
import { Ticket } from "../../models/tickets";

const initialState: TicketsState = {
  tickets: [],
  isLoading: false,
};

const tickets = (state = initialState, action: TicketAction) => {
  switch (action.type) {
    case TICKET_UPDATE_ACTION:
      return {
        ...state,
        tickets: action.tickets,
      };
    case TICKET_LOADING_ACTION:
      return {
        ...state,
        isLoading: action.isLoading,
      };
    default:
      return state;
  }
};

export interface TicketsState {
  tickets: Array<Ticket>;
  isLoading: boolean;
}

export default tickets;
