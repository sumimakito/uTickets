import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { TICKET_UPDATE_ACTION } from "../../redux/actions/tickets";
import { getTickets } from "../../services/tickets";
import Checkout from "../Checkout/Checkout";
import OverView from "../Overview/Overview";
import BigNumber from "bignumber.js";
import "./App.scss";

const App: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getTickets().then(({ data }) => {
      console.log(data);
      dispatch({
        type: TICKET_UPDATE_ACTION,
        tickets: data,
      });
    });
  }, [dispatch]);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/">
            <OverView />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
