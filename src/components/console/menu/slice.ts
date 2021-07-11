import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MenuInfoResponse } from '../../common/type';


export interface MenuState {
  storeId: string,
  menus: MenuInfoResponse[];
  loading: boolean;
}
const initialState: MenuState = {
  storeId: "",
  menus: [],
  loading: true
}

export const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    setLoadingState: (state) => {
      state.loading = !state.loading;
    },
    setMenu: (state, action: PayloadAction<MenuInfoResponse[]>) => {
      state.menus = action.payload
    },
    setStoreId: (state, action: PayloadAction<string>) => {
      state.storeId = action.payload;
    },
  }
});


export default menuSlice.reducer;