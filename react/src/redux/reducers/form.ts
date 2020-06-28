import { TicketInfo } from "../../models/tickets";
import {
  FormAction,
  FORM_RESET_ACTION,
  FORM_UPDATE_ACTION,
} from "../actions/form";

const initialState: FormState = {
  forms: Array<TicketInfo>(),
};

const form = (state = initialState, action: FormAction) => {
  switch (action.type) {
    case FORM_RESET_ACTION: {
      const forms = Array.from(action.newTicketInfo);
      console.log("FORM_RESET_ACTION", forms);
      return {
        ...state,
        forms,
      };
    }
    case FORM_UPDATE_ACTION: {
      const i = state.forms.findIndex(
        (info) => info.uuid === action.ticketInfo.uuid
      );
      if (i < 0) return state;
      state.forms.splice(i, 1, action.ticketInfo);
      const forms = Array.from(state.forms);
      console.log("FORM_UPDATE_ACTION", forms);
      return {
        ...state,
        forms,
      };
    }
    default:
      return state;
  }
};

export interface FormState {
  forms: Array<TicketInfo>;
}

export default form;
