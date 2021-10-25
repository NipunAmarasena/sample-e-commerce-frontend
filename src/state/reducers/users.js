import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    userId: null,
    loggedInTime: null,
    isAuthenticated: false
  },
  reducers: {
    setUserId(state, { payload }) {
      state.userId = payload.email;
      state.loggedInTime = payload.currentTime;
    },
    setIsAuthenticated(state, { payload }) {
      state.isAuthenticated = payload
    }
  }
});

export const { setUserId, setLoggedInTime, setIsAuthenticated } = usersSlice.actions;

export default usersSlice.reducer;
