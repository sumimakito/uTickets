import { combineReducers } from "redux";
import ticketsReducer from "./tickets";
import cartReducer from "./cart";
import formReducer from "./form";

const rootReducer = combineReducers({
  tickets: ticketsReducer,
  cart: cartReducer,
  form: formReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
