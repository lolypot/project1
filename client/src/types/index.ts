export interface GoodsRequestData {
  senderUnp: string;
  senderName: string;
  receiverUnp: string;
  receiverName: string;
  description: string;
  code: string;
}
export interface TransportRequestData {
  transportIdentifier: string;
  vin: string;
}
export interface DeclarationParams {
  ga: string;
}

export enum SearchType {
  Goods = "Goods",
  Transport = "Transport",
  Declaration = "Declaration",
}
