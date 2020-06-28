export const ORDER_STATE_ACTION = "ORDER_STATE_ACTION";

export type OrderStateAction = {
  type: typeof ORDER_STATE_ACTION;
  isLoading: boolean;
};

export type OrderAction = OrderStateAction;
