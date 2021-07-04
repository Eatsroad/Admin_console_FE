import { AxiosResponse } from "axios";

export interface UserSigninData {
  email: string;
  password: string;
}

export interface UserSigninResponse extends AxiosResponse {
  user_id: number;
  name: string;
  email: string;
  createdAt: string;
  role: string;
  accessToken: string;
  refreshToken: string;
  stores: StorePreviewData[];
}

export interface LoginState {
  user: UserSigninData;
}
export interface StorePreviewData {
  name: string;
  store_id: number;
}