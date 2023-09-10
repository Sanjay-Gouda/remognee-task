import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "..";

type TRate = {
  rate: number;
  count: number;
};

type TCollection = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  rating: TRate;
  title: string;
  count: number;
};

type Tinitialstate = {
  items: { [id: string]: TCollection };
};

const initialState: Tinitialstate = {
  items: {},
};

const cart = createSlice({
  name: "productCart",
  initialState: initialState,
  reducers: {
    handleAddToCart: (state: Tinitialstate, action: any) => {
      //   console.log(action.payload.id);

      const id = action.payload.id;
      if (state?.items?.[id]) {
        state.items[id].count++;
      } else {
        const payload = action.payload;
        state.items[id] = {
          ...payload,
          count: 1,
        };
      }
    },

    removeCartItem: (state: Tinitialstate, action: any) => {
      const id = action.payload.id;

      if (state?.items?.[id]) {
        state.items[id].count--;
      }
    },
  },
});

export const useAddCart = (state: RootState) => state.cart.items;

export const { handleAddToCart, removeCartItem } = cart.actions;

export default cart.reducer;
