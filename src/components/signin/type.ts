import { AxiosResponse } from "axios";

export interface UserSigninData {
  email: string;
  password: string;
}

export interface UserSigninResponse extends AxiosResponse {
  userId: number;
  name: string;
  email: string;
  createdAt: string;
  role: string;
  accessToken: string;
  refreshToken: string;
}

export interface LoginState {
  user: UserSigninData;
}