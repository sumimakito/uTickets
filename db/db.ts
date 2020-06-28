import { Ticket, FormItemType } from "../models/ticket";
import BigNumber from "bignumber.js";

export const getTickets = (): Array<Ticket> => {
  return [
    {
      type: "remote",
      name: "远程票",
      features: ["赠送数字版资料（PPT 及设计资源）"],
      price: new BigNumber("9.9"),
      infoFormItems: [
        {
          name: "email",
          label: "电子邮箱",
          placeholder: "资料将被发送至您提供的邮箱",
          type: FormItemType.EMAIL,
        },
      ],
    },
    {
      type: "onsite_normal",
      name: "现场票-普通",
      features: ["赠送数字版资料（PPT 及设计资源）", "赠送活动纪念礼品"],
      price: new BigNumber("39.9"),
      infoFormItems: [
        {
          name: "email",
          label: "电子邮箱",
          placeholder: "入场凭证将被发送至您提供的邮箱",
          type: FormItemType.EMAIL,
        },
        {
          name: "name",
          label: "姓名",
          placeholder: "请提供与身份证持有人一致的姓名以便入场核验",
          type: FormItemType.TEXT,
        },
        {
          name: "idcard_serial",
          label: "身份证号",
          placeholder: "请提供您的身份证号以便入场核验",
          type: FormItemType.IDCARD_SERIAL,
        },
      ],
    },
    {
      type: "onsite_vip",
      name: "现场票-VIP",
      features: [
        "赠送数字版资料（PPT 及设计资源）",
        "赠送活动纪念礼品",
        "VIP 座席",
        "可参加活动后交流咨询会",
      ],
      price: new BigNumber("99.9"),
      infoFormItems: [
        {
          name: "email",
          label: "电子邮箱",
          placeholder: "入场凭证将被发送至您提供的邮箱",
          type: FormItemType.EMAIL,
        },
        {
          name: "name",
          label: "姓名",
          placeholder: "请提供与身份证持有人一致的姓名以便入场核验",
          type: FormItemType.TEXT,
        },
        {
          name: "idcard_serial",
          label: "身份证号",
          placeholder: "请提供您的身份证号以便入场核验",
          type: FormItemType.IDCARD_SERIAL,
        },
      ],
    },
    {
      type: "onsite_sponsor",
      name: "现场票-赞助商",
      features: [
        "赠送数字版资料（PPT 及设计资源）",
        "赠送活动纪念礼品",
        "赞助商座席",
        "可申请会场内宣传展位",
      ],
      price: new BigNumber("199.9"),
      infoFormItems: [
        {
          name: "email",
          label: "电子邮箱",
          placeholder: "入场凭证将被发送至您提供的邮箱",
          type: FormItemType.EMAIL,
        },
        {
          name: "name",
          label: "姓名",
          placeholder: "请提供与身份证持有人一致的姓名以便入场核验",
          type: FormItemType.TEXT,
        },
        {
          name: "idcard_serial",
          label: "身份证号",
          placeholder: "请提供您的身份证号以便入场核验",
          type: FormItemType.IDCARD_SERIAL,
        },
        {
          name: "sponsor_name",
          label: "赞助商名称",
          placeholder: "赞助商名称将出现在您的会场内挂牌上",
          type: FormItemType.TEXT,
        },
        {
          name: "sponsor_need_stall",
          label: "需要申请展位",
          type: FormItemType.CHECKBOX,
        },
      ],
    },
  ];
};
