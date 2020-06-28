import { v4 as uuid } from "uuid";

export type Ticket = {
  type: string;
  name: string;
  features: Array<string>;
  price: string;
  infoFormItems: Array<TicketInfoFormItem>;
};

export type TicketInfo = {
  ticket: Ticket;
  uuid: string;
  data: {
    [key: string]: string | boolean;
  };
};

export type TicketInfoFormItem = {
  name: string;
  label?: string;
  placeholder?: string;
  pattern?: string;
  type: string;
  optional?: boolean;
};

export const FormItemType = {
  EMAIL: "email",
  TEXT: "text",
  IDCARD_SERIAL: "idcard_serial",
  CHECKBOX: "checkbox",
};

export const expandTicketInfo = (
  all: Array<Ticket>,
  selected: Map<Ticket, number>
) =>
  Array.from(selected.keys())
    .reduce(
      (arr: Array<TicketInfo>, ticket) =>
        arr.concat(
          Array(selected.get(ticket))
            .fill(0)
            .map(
              (): TicketInfo => ({
                ticket,
                uuid: uuid(),
                data: {},
              })
            )
        ),
      []
    )
    .sort(
      (a: TicketInfo, b: TicketInfo) =>
        all.indexOf(a.ticket) - all.indexOf(b.ticket)
    );
