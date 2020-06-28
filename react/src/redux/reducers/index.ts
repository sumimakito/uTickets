import { combineReducers } from "redux";
import ticketsReducer from "./tickets";
import cartReducer from "./cart";
import formReducer from "./form";
import orderReducer from "./order";

const rootReducer = combineReducers({
  tickets: ticketsReducer,
  cart: cartReducer,
  form: formReducer,
  order: orderReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
