//user
export interface UserInfoWithUserIdData {
  userId: string;
}
export interface UserInfoWithUserIdResponse  {
  user_id: number;
  name: string;
  stores: StorePreviewInfo[];
}

//store
export interface StorePreviewInfo {
  name: string;
  store_id: number;
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

//menu
export interface MenuPreviewInfo {
  name: string;
  menu_id: number;
};
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
export interface UpdateOptionGroupinMenuData {
  optionGroups: number[];
}

//category
export interface CategoryPreviewInfo {
  name: string;
  category_id: number;
}
export interface CreateCategoryData {
  name: string;
  description: string;
  state: string;
  menus: number[];
  role: string;
  store_id: number;
}
export interface CreateCategoryResponse {
  name: string;
  menus: MenuPreviewInfo[];
  description: string;
  state: string;
  category_id: number;
  role: string;
}
export interface CategoryInfoResponse {
  name: string;
  menus: MenuPreviewInfo[];
  description: string;
  state: string;
  category_id: number;
  role: string;
}
export interface UpdateCategoryData {
  categories: number[];
}
export interface UpdateCategoryMenu {
  menus: number[];
}

//optionGroup
export interface OptionGroupPreviewInfo {
  name: string;
  option_group_id: number;
};
export interface CreateOptionGroupData {
  name: string;
  description: string;
  state: string;
  option_id: number[];
  store_id: number;
}
export interface OptionGroupInfoResponse {
  option_group_id : number;
  name: string;
  description:string;
  state: string;
  option_id: OptionPreviewInfo[];
  menus: MenuPreviewInfo[];
}
export interface UpdateMenuInOptionGroupData {
  menus: number[];
}
export interface UpdateOptionInOptionGroup {
  option_id: number[];
}
export interface OptionGroupPreviewInfo {
  name: string;
  option_group_id: number;
};

//option
export interface OptionPreviewInfo {
  name: string;
  option_id: number;
}
export interface CreateOptionData {
  name: string;
  price: number;   
  state: string;
  store_id: number;
}
export interface OptionInfoResponse {
  option_id: number;
  option_group_id: OptionGroupPreviewInfo[];
  name: string;
  price: number;
  state: string;
}
export interface UpdateOptionGroupInOption {
  option_group_id: number[];
}

export interface OptionPreviewInfo {
  name: string;
  option_id: number;
}