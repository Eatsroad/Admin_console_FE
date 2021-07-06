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

export interface CreateMenuData {
  name: string;
  price: number;
  description: string;
  state: string;
  store_id: number;
}
export interface CreateMenuResponse {
  menu_id: number;
  name: string;
  price: number;
  description: string;
  state: string;
  // categories: CategoryPreviewInfo[];
  // optionGroups: OptionGroupPreviewInfo[];
  // enable_time: EnableTime;
}
export interface MenuInfoResponse {
  menu_id: number;
  name: string;
  price: number;
  description: string;
  state: string;
  categories: CategoryPreviewInfo[];
  optionGroups: OptionGroupPreviewInfo[];
  // enable_time: EnableTime;
}
export interface CategoryPreviewInfo {
  name: string;
  category_id: number;
}
export interface OptionGroupPreviewInfo {
  name: string;
  option_group_id: number;
};