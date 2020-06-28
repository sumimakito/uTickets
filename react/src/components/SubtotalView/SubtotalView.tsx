import BigNumber from "bignumber.js";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";
import { RootState } from "../../redux/reducers";
import "./SubtotalView.scss";

const SubtotalView: React.FC = () => {
  const selection = useSelector((state: RootState) => state.cart.tickets);
  const subtotal = Array.from(selection.keys())
    .reduce((acc, ticket) => {
      return new BigNumber(ticket.price)
        .multipliedBy(selection.get(ticket)!)
        .plus(acc);
    }, new BigNumber(0))
    .toFixed(2);

  return (
    <div className="SubtotalView">
      <div className="title">小计</div>
      <div className="body">
        <div className="left">¥ {subtotal}</div>
        <div className="right">
          <Link to="/checkout">
            <Button primary disabled={!selection.size}>
              继续
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SubtotalView;
