import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { userInitialState } from "@/state/initialState";
import { User } from "@/types";

const userSlice = createSlice({
  name: "user",
  initialState: userInitialState,
  reducers: {
    setUserDetails: (state, action: PayloadAction<User>) => {
      state = action.payload;
    },
  },
});

export const { setUserDetails } = userSlice.actions;

export default userSlice.reducer;
