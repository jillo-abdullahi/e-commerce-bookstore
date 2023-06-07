import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { userInitialState } from "@/redux/initialState";
import { User } from "@/types";

const userSlice = createSlice({
  name: "user",
  initialState: userInitialState,
  reducers: {
    updateUser: (state, action: PayloadAction<User>) => {
      state = { ...state, ...action.payload };
      return state;
    },
  },
});

export const { updateUser } = userSlice.actions;

export default userSlice.reducer;
