import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CategoryInfoResponse } from '../../common/type';

export interface CategoryState {
  categoryies: CategoryInfoResponse[];
  category: CategoryInfoResponse | null;
}
const initialState: CategoryState = {
  categoryies: [],
  category: null
}

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setCategories: (state, action: PayloadAction<CategoryInfoResponse[]>) => {
      state.categoryies = action.payload
    },
    setCategory: (state, action: PayloadAction<number>) => {
      state.category = state.categoryies.filter((m) => m.category_id === action.payload)[0];
    },
    setCategoryWithNULL: (state) => {
      state.category = null;
    }
  }
});

export const { setCategories, setCategory, setCategoryWithNULL } = categorySlice.actions;
export default categorySlice.reducer;