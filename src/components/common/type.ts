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