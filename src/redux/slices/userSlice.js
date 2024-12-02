import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    username: "",
    email: "",
    isLoggedIn: false,
  },
  reducers: {
    setUser(state, action) {
      const { username, email, token } = action.payload;
      state.username = username;
      state.email = email;
      state.token = token;
    },
    clearUser(state) {
      state.username = "";
      state.email = "";
      state.token = "";
      state.isLoggedIn = false;
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;

export default userSlice.reducer;
