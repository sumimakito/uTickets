import BigNumber from "bignumber.js";

export type Ticket = {
  type: string;
  name: string;
  features: Array<string>;
  price: BigNumber;
  infoFormItems: Array<TicketInfoFormItem>;
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
