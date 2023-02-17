import axios, { AxiosRequestConfig } from "axios";
import {
  DeclarationParams,
  GoodsRequestData,
  TransportRequestData,
} from "../types";

const serviceRoute = "http://localhost:2072/api/v1";

class GtkService {
  public async getGoods(requestData: GoodsRequestData) {
    const dockerUrl = `${serviceRoute}/goods/find?page=0&size=20`;

    const options: AxiosRequestConfig = {
      url: `http://localhost:5000`,
      method: "POST",
      headers: {
        accept: "*/*",
        "Content-Type": "application/json",
      },
      data: { requestData, requestUrl: dockerUrl, method: "POST" },
    };

    const { data } = await axios(options);

    return data;
  }

  public async getTransport(requestData: TransportRequestData) {
    const dockerUrl = `${serviceRoute}/goods/findTransport?page=0&size=20`;

    const options: AxiosRequestConfig = {
      url: `http://localhost:5000`,
      method: "POST",
      headers: {
        accept: "*/*",
        "Content-Type": "application/json",
      },
      data: { requestData, requestUrl: dockerUrl, method: "POST" },
    };
    const { data } = await axios(options);

    return data;
  }

  public async getDeclaration(params: DeclarationParams) {
    const dockerUrl = `${serviceRoute}/declaration/get?ga=${params.ga}`;

    const options: AxiosRequestConfig = {
      url: `http://localhost:5000`,
      method: "POST",
      headers: {
        accept: "*/*",
      },
      data: { requestUrl: dockerUrl, requestData: {}, method: "GET" },
    };
    const { data } = await axios(options);

    return data;
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new GtkService();
