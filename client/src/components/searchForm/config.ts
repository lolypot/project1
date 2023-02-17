import gtkService from "../../services/gtkService";
import {
  DeclarationParams,
  GoodsRequestData,
  TransportRequestData,
} from "../../types";

const goodsInitialState: GoodsRequestData = {
  senderUnp: "",
  senderName: "",
  receiverUnp: "",
  receiverName: "",
  description: "",
  code: "",
};
export const goodsSearchData = {
  searchControls: [
    { name: "senderUnp", label: "УПН Отправителя" },
    { name: "senderName", label: "Наименование Отправителя" },
    { name: "receiverUnp", label: "УПН Получателя" },
    { name: "receiverName", label: "Наименование Получателя" },
    { name: "description", label: "Описание" },
    { name: "code", label: "Код" },
  ],
  initialState: goodsInitialState,
  serviceGetter: gtkService.getGoods,
};

const transportInitialState: TransportRequestData = {
  transportIdentifier: "",
  vin: "",
};
export const transportSearchData = {
  searchControls: [
    { name: "transportIdentifier", label: "УПН Отправителя" },
    { name: "vin", label: "Наименование Отправителя" },
  ],
  initialState: transportInitialState,
  serviceGetter: gtkService.getTransport,
};

const declarationInitialState: DeclarationParams = {
  ga: "",
};
export const declarationSearchData = {
  searchControls: [{ name: "ga", label: "Номер декларации" }],
  initialState: declarationInitialState,
  serviceGetter: gtkService.getDeclaration,
};
