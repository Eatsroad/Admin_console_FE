import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MenuInfoResponse } from '../../common/type';

export interface MenuState {
  menus: MenuInfoResponse[];
  menu: MenuInfoResponse | null;
}
const initialState: MenuState = {
  menus: [],
  menu: null
}

export const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    setMenus: (state, action: PayloadAction<MenuInfoResponse[]>) => {
      state.menus = action.payload
    },
    setMenu: (state, action: PayloadAction<number>) => {
      state.menu = state.menus.filter((m) => m.menu_id === action.payload)[0];
    }
  }
});

export const { setMenus, setMenu } = menuSlice.actions;
export default menuSlice.reducer;