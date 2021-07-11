import axios, { AxiosResponse } from "axios";
import {
  CategoryInfoResponse,
  CreateCategoryData, 
  CreateCategoryResponse, 
  CreateMenuData, 
  CreateMenuResponse, 
  CreateStoreData, 
  CreateStoreResponse, 
  MenuInfoResponse, 
  UpdataCategoryData, 
  UserInfoWithUserIdData, 
  UserInfoWithUserIdResponse 
} from "./components/common/type";
import { UserSigninData, UserSigninResponse } from "./components/signin/type";
import { UserSignupdata, UserSignupResponse } from "./components/signup/type";

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
    const result = await api.post("user/signin", data);
    return result;
  },
  getUserInfoWithUserId: async (
    data: UserInfoWithUserIdData
  ): Promise<AxiosResponse<UserInfoWithUserIdResponse>> => {
    const result = await api.get(`user/${data.userId}`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
      }
    });
    return result;
  } 
}

export const storeAPI = {
  createStore: async (
    data: CreateStoreData
  ): Promise<AxiosResponse<CreateStoreResponse>> => {
    const result = await api.post("store", data, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
      }
    });
    return result;
  },
  getStoreInfo: async (
    storeId: number
  ): Promise<AxiosResponse<CreateStoreResponse>> => {
    const result = await api.get(`store/${storeId}`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
      }
    });
    return result;
  }
}

export const menuAPI = {
  createMenu: async (
    data: CreateMenuData
  ): Promise<AxiosResponse<CreateMenuResponse>> => {
    const result = await api.post("menu/", data, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
      }
    });
    return result;
  },
  getAllMenu: async (
    storeId: string
  ): Promise<AxiosResponse<MenuInfoResponse[]>> => {
    const result = await api.get(`menu/?store_id=${storeId}`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
      }
    });
    return result;
  },
  updateMenuCategory: async (
    categories: UpdataCategoryData,
    menuId: number
  ): Promise<AxiosResponse> => {
    const result = await api.patch(`menu/${menuId}/category`, categories,  {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
      }
    });
    return result;
  }
}

export const categoryAPI = {
  createCategory: async (
    data: CreateCategoryData
  ): Promise<AxiosResponse<CreateCategoryResponse>> => {
    const result = await api.post("category", data, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
      }
    });
    return result;
  },
  getAllCategories: async (
    storeId: string
  ): Promise<AxiosResponse<CategoryInfoResponse[]>> => {
    const result = await api.get(`category/?storeId=${storeId}`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
      }
    });
    return result;
  },
}

// export const optoinGroupAPI = {
//   createOptionGroup: async (

//   ): Promise<AxiosResponse<>> => {

//   },
//   getAllOptionGroups: async (

//   ): Promise<AxiosResponse<>> => {

//   }
// }