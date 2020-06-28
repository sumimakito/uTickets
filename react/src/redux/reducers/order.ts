import { OrderAction, ORDER_STATE_ACTION } from "../actions/order";

const initialState: OrderState = {
  isLoading: false,
};

const order = (state = initialState, action: OrderAction) => {
  switch (action.type) {
    case ORDER_STATE_ACTION: {
      return {
        ...state,
        isLoading: action.isLoading,
      };
    }
    default:
      return state;
  }
};

export interface OrderState {
  isLoading: boolean;
}

export default order;
