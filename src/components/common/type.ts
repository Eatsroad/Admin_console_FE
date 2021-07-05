export interface UserInfoWithUserIdData {
  userId: string;
}
export interface StorePreviewInfo {
  name: string;
  store_id: number;
}
export interface UserInfoWithUserIdResponse  {
  user_id: number;
  name: string;
  stores: StorePreviewInfo[];
}

export interface CreateStoreData {
  name: string;
  address: string;
  phone_number: string;
  tables: number;
}
export interface CreateStoreResponse {
  store_id: number;
  name: string;
  address: string;
  phone_number: string;
  tables: number;
}