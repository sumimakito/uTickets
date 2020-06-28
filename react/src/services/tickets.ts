import Axios from "axios";
import { TICKET_LOADING_ACTION } from "../redux/actions/tickets";
import { store } from "../redux/store";
import { API_BASE } from "./commons";

const { dispatch } = store;

export const getTickets = () => {
  dispatch({
    type: TICKET_LOADING_ACTION,
    isLoading: true,
  });
  return Axios.get(`${API_BASE}/tickets`).finally(() => {
    dispatch({
      type: TICKET_LOADING_ACTION,
      isLoading: false,
    });
  });
};
