import React from "react";
import { useDispatch } from "react-redux";
import { Checkbox, Input } from "semantic-ui-react";
import {
  FormItemType,
  TicketInfo,
  TicketInfoFormItem,
} from "../../models/tickets";
import { FORM_UPDATE_ACTION } from "../../redux/actions/form";
import "./TicketForm.scss";

type Props = {
  ticketInfo: TicketInfo;
};

const TicketForm: React.FC<Props> = ({ ticketInfo }) => {
  const formItems = ticketInfo.ticket.infoFormItems;
  const dispatch = useDispatch();

  const onInputChange = (
    evt: React.SyntheticEvent,
    item: TicketInfoFormItem,
    forceUpperCase = false
  ) => {
    const target = evt.target as HTMLInputElement;
    const value =
      target.type === "checkbox"
        ? target.checked
        : forceUpperCase
        ? target.value.toUpperCase()
        : target.value;
    dispatch({
      type: FORM_UPDATE_ACTION,
      ticketInfo: {
        ...ticketInfo,
        data: {
          ...ticketInfo.data,
          [item.name]: value,
        },
      },
    });
  };

  const commonAttrs = (item: TicketInfoFormItem) => ({
    label: item.label || null,
    placeholder: item.placeholder || "",
    value: ticketInfo.data[item.name] || "",
    pattern: item.pattern || null,
    onChange: (evt: React.SyntheticEvent) => onInputChange(evt, item),
    required: !item.optional,
  });

  return (
    <div className="TicketForm">
      <div className="groupTitle">{ticketInfo.ticket.name}</div>
      <div className="inputGroup">
        {formItems
          .map((item) => {
            switch (item.type) {
              case FormItemType.EMAIL:
                return (
                  <Input
                    {...commonAttrs(item)}
                    type="email"
                    title="电子邮箱地址"
                  />
                );
              case FormItemType.TEXT:
                return <Input {...commonAttrs(item)} />;
              case FormItemType.IDCARD_SERIAL:
                return (
                  <Input
                    {...commonAttrs(item)}
                    pattern="[0-9]{17}[0-9X]"
                    title="18 位身份证号"
                  />
                );
              case FormItemType.CHECKBOX:
                return (
                  <Checkbox
                    label={item.label}
                    checked={ticketInfo.data[item.name]! as boolean}
                    onChange={(evt) => onInputChange(evt, item)}
                  />
                );
              default:
                return null;
            }
          })
          .map((component) => (
            <div className="inputContainer">{component}</div>
          ))}
      </div>
    </div>
  );
};

export default TicketForm;
