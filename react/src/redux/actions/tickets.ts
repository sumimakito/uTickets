import { Ticket } from "../../models/tickets";

export const TICKET_UPDATE_ACTION = "TICKET_UPDATE_ACTION";
export const TICKET_LOADING_ACTION = "TICKET_LOADING_ACTION";

export type TicketUpdateAction = {
  type: typeof TICKET_UPDATE_ACTION;
  tickets: Array<Ticket>;
};

export type TicketLoadingAction = {
  type: typeof TICKET_LOADING_ACTION;
  isLoading: boolean;
};

export type TicketAction = TicketUpdateAction | TicketLoadingAction;
