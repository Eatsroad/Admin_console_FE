import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface SigninState {
  errMessege: string;
  state: boolean;
}
const initialState: SigninState = {
  errMessege: "",
  state: false,
}
const signinSlice = createSlice({
  name: 'signin',
  initialState,
  reducers: {
    setErrMeseege(state, action: PayloadAction<string>) {
      state.errMessege = action.payload;
    },
    setSigninState(state, action: PayloadAction<boolean>) {
      state.state = action.payload;
    },
  }
});

export const { setErrMeseege } = signinSlice.actions;
export default signinSlice.reducer;