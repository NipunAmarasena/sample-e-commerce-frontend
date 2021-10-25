import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    showCart: "hide",
    items: [],
  },
  reducers: {
    setCartVisibility(state, { payload }) {
      state.showCart = payload;
    }
  }
});

export const { setCartVisibility } = cartSlice.actions;

export default cartSlice.reducer;
