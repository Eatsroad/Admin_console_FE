import axios, { AxiosResponse } from "axios";
import { UserSigninData, UserSigninResponse } from "./features/signin/type";
import { UserSignupdata, UserSignupResponse } from "./features/signup/type";

const api = axios.create({
  baseURL: "http://3.35.150.237:3000",
});

export const userApi = {
  signup: async (
    data: UserSignupdata,
  ): Promise<AxiosResponse<UserSignupResponse>> => {
    const result = await api.post("user", data);
    return result;
  },
  signin: async (
    data: UserSigninData,
  ): Promise<AxiosResponse<UserSigninResponse>> => {
    const result = await api.post("user/sign-in", data);
    return result;
  },
}