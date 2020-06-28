import React from "react";
import NumberSelector from "../NumberSelector/NumberSelector";
import { Ticket } from "../../models/tickets";
import "./TicketItem.scss";
import BigNumber from "bignumber.js";

type Props = {
  ticket: Ticket;
  readonly?: boolean;
};

const TicketItem: React.FC<Props> = ({ ticket, readonly }) => {
  const { name, features, price } = ticket;
  return (
    <div className="TicketItem">
      <div className="left">
        <div className="name">{name}</div>
        {features && (
          <div className="description">
            <ul>
              {features.map((feature) => (
                <li>{feature}</li>
              ))}
            </ul>
          </div>
        )}
        <div className="price">¥ {new BigNumber(price).toFixed(2)}</div>
      </div>
      <div className="right">
        <NumberSelector ticket={ticket} readonly={readonly} />
      </div>
    </div>
  );
};

TicketItem.defaultProps = {
  readonly: false,
};

export default TicketItem;
