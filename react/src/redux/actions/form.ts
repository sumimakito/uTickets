import { TicketInfo } from "../../models/tickets";

export const FORM_UPDATE_ACTION = "FORM_UPDATE_ACTION";
export const FORM_RESET_ACTION = "FORM_RESET_ACTION";

export type FormUpdateAction = {
  type: typeof FORM_UPDATE_ACTION;
  ticketInfo: TicketInfo;
};

export type FormResetAction = {
  type: typeof FORM_RESET_ACTION;
  newTicketInfo: Array<TicketInfo>;
};

export type FormAction = FormUpdateAction | FormResetAction;
