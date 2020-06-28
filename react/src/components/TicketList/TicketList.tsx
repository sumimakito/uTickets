import React from "react";
import TicketItem from "./TicketItem";
import { Ticket } from "../../models/tickets";
import "./TicketList.scss";

type Props = {
  tickets?: Array<Ticket>;
  readonly?: boolean;
};

const TicketList: React.FC<Props> = ({ tickets, readonly }) => {
  return (
    <div className="TicketList">
      {tickets &&
        tickets.map((ticket) => (
          <TicketItem key={ticket.type} ticket={ticket} readonly={readonly} />
        ))}
    </div>
  );
};

export default TicketList;
