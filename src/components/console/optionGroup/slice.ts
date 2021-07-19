import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { OptionGroupInfoResponse } from "../../common/type";

export interface OptionGroupState {
  optionGroups: OptionGroupInfoResponse[];
  optionGroup: OptionGroupInfoResponse | null;
}
const initialState: OptionGroupState = {
  optionGroup: null,
  optionGroups: [],
}

export const optionGroupSlice = createSlice({
  name: 'optionGroup',
  initialState, 
  reducers: {
    setOptionGroups: (state, action: PayloadAction<OptionGroupInfoResponse[]>) => {
      state.optionGroups = action.payload
    },
    setOptionGropup: (state, action: PayloadAction<number>) => {
      state.optionGroup = state.optionGroups.filter((o) => o.option_group_id === action.payload)[0];
    },
    setOptionGroupWithNull: (state) => {
      state.optionGroup = null;
    }
  }
});

export const { setOptionGroups, setOptionGropup, setOptionGroupWithNull, } = optionGroupSlice.actions;
export default optionGroupSlice.reducer;