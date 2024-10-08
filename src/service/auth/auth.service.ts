import axios, { AxiosResponse } from "axios";
import { BASE_URL, INSTANCE_URL } from "../../common/base-url";
import axiosInstance from "../axios-instance";

export interface IAuth {
  accessToken: string;
  createdAt: string;
  expiresIn: number;
  refreshToken: string;
}

export interface IStateCodeResponse {
  state: string;
  userId: string;
}


export const getAccessToken = (id:string): Promise<AxiosResponse<IAuth>> => {
  return axiosInstance.get(`/figma/access_token?userId=${id}`);
};

export const getStateCode = (id:string): Promise<AxiosResponse<IStateCodeResponse>> => {
  return axiosInstance.get(`/figma/state?userId=${id}`);
};

export const removeFigmaToken = (id:string): Promise<AxiosResponse<any>> => {
  return axiosInstance.get(`/figma/logout?userId=${id}`);
};
