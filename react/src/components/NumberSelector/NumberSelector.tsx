import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Icon } from "semantic-ui-react";
import { CART_UPDATE_ACTION } from "../../redux/actions/cart";
import { RootState } from "../../redux/reducers";
import { Ticket } from "../../models/tickets";
import "./NumberSelector.scss";

type Props = {
  min?: Number;
  max?: Number;
  ticket: Ticket;
  readonly?: boolean;
};

const NumberSelector: React.FC<Props> = ({ min, max, ticket, readonly }) => {
  const { tickets } = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  const count = tickets.get(ticket) ?? 0;

  return (
    <div className="NumberSelector">
      {readonly ? (
        <div className="value readonly">
          <div className="text">× {count}</div>
        </div>
      ) : (
        <Button.Group icon size="mini">
          <Button
            onClick={() => {
              const newCount = count <= min! ? min! : count - 1;
              dispatch({
                type: CART_UPDATE_ACTION,
                ticket,
                count: newCount,
              });
            }}
            disabled={count <= min!}
          >
            <Icon name="minus" />
          </Button>
          <div className="value">
            <div className="text">{count}</div>
          </div>
          <Button
            onClick={() => {
              const newCount = count >= max! ? max! : count + 1;
              dispatch({
                type: CART_UPDATE_ACTION,
                ticket,
                count: newCount,
              });
            }}
            disabled={count >= max!}
          >
            <Icon name="add" />
          </Button>
        </Button.Group>
      )}
    </div>
  );
};

NumberSelector.defaultProps = {
  min: 0,
  max: 99,
  readonly: false,
};

export default NumberSelector;
