import { createSlice } from "@reduxjs/toolkit";

// let localCart = localStorage.getItem("cart");
// if (!localCart) {
//   localCart = {};
// } else {
//   localCart = JSON.parse(localCart);
// }

const localCart =
  localStorage.getItem("cart") != null
    ? JSON.parse(localStorage.getItem("cart"))
    : {};

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: localCart,
  },
  reducers: {
    addCart: (state, action) => {
      // console.log(action.payload);

      const { id } = action.payload;
      // console.log(id);

      if (!state.items[id]) {
        state.items[id] = { ...action.payload, quantity: 1 };
      } else {
        {
          state.items[id].quantity += 1;
        }
      }

      localStorage.setItem("cart", JSON.stringify({ ...state.items }));
    },

    removeCart: (state, action) => {
      // payload = id

      const { payload: id } = action;

      state.items[id].quantity -= 1;

      if (state.items[id].quantity === 0) {
        delete state.items[id];
      }

      localStorage.setItem("cart", JSON.stringify({ ...state.items }));
    },

    clearCart: (state) => {
      state.items = {};
      localStorage.removeItem("cart");
    },
  },
});

export const { addCart, removeCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
