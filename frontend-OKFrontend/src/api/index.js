import ApiCore from 'axios-core-api';
import {AxiosRequestConfig} from "axios";

const apiConfig: AxiosRequestConfig   = {
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  timeout: 15000
}

export default class baseApi {
  _apiCore: ApiCore;
  _basePath: string;

  constructor() {
    this._apiCore = new ApiCore(apiConfig);
    this._basePath = '';
  }
}

export const apiCore = new ApiCore(apiConfig);
export const basePath = 'http://localhost:8080/api';
// const baseApi = new BaseApi(apiCore, basePath);
