import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { OptionInfoResponse } from "../../common/type";

export interface OptionState {
  options: OptionInfoResponse[];
  option: OptionInfoResponse | null;
};

const initialState: OptionState = {
  options: [],
  option: null
};

export const optionSlice = createSlice({
  name: 'option',
  initialState,
  reducers: {
    setOptions: (state, action: PayloadAction<OptionInfoResponse[]>) => {
      state.options = action.payload;
    },
    setOption: (state, action: PayloadAction<number>) => {
      state.option = state.options.filter((o) => o.option_id === action.payload)[0];
    },
    setOPtionWithNull: (state) => {
      state.option = null;
    }
  }
});

export const { setOptions, setOption, setOPtionWithNull } = optionSlice.actions;
export default optionSlice.reducer;
