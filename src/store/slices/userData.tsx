import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "..";

const userData = createSlice({
  name: "userData",
  initialState: {
    data: {},
  },
  reducers: {
    setUserData: (state, action) => {
      const payload = action.payload;
      console.log(payload);
      return {
        ...state.data,
        data: payload,
      };
    },
  },
});

export const useUserData = (state: RootState) => state.userData.data;

export const { setUserData } = userData.actions;

export default userData.reducer;
