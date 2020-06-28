import Axios from "axios";
import { Order } from "../models/order";
import { API_BASE } from "./commons";
import { store } from "../redux/store";
import { ORDER_STATE_ACTION } from "../redux/actions/order";

const { dispatch } = store;

export const postOrder = (order: Order) => {
  dispatch({
    type: ORDER_STATE_ACTION,
    isLoading: true,
  });
  return Axios.post(`${API_BASE}/order`, order).finally(() => {
    dispatch({
      type: ORDER_STATE_ACTION,
      isLoading: false,
    });
  });
};
