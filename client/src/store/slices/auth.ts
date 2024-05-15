/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAuth, User } from "@/types/model";

interface AuthSliceState {
  isAuthenticated: boolean;
  isLoading: boolean;
  isAdmin: boolean;
  token: string;
  user: User | null;
}

const initialState: AuthSliceState = {
  isAuthenticated: false,
  isLoading: true,
  isAdmin: false,
  token: "",
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    onLoggedIn: (state, { payload }: PayloadAction<IAuth>) => {
      state.isAuthenticated = true;
      localStorage.setItem("token", payload.token);
      state.user = payload.user;
      //   state.isAdmin = payload.is_admin;
      state.token = payload.token;
      state.isLoading = false;
    },
    onLoggedOut: (state) => {
      state.isAuthenticated = false;
      state.isLoading = false;
      localStorage.removeItem("token");
      localStorage.removeItem("company");
      state.user = null;
    },
  },
});

export const { onLoggedIn, onLoggedOut } = authSlice.actions;

export default authSlice.reducer;
