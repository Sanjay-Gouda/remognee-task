import { configureStore } from "@reduxjs/toolkit";

import userData from "./slices/userData";
import cart from "./slices/cart";
// import cartItem from "./slices/addToCart";

const store = configureStore({
  reducer: {
    userData,
    cart,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
