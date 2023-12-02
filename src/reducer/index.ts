import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Product, products } from "../data";

const productInitialState: { products: Product[] } = { products: products };

const productSlice = createSlice({
  name: "product",
  initialState: productInitialState,
  reducers: {
    create: (state, action: PayloadAction<Product>) => {
      state.products.push(action.payload);
    },
    edit: (state, action: PayloadAction<{ id: string; product: Product }>) => {
      const { id, product } = action.payload;
      const productIndex = state.products.findIndex(
        (product) => product.id === id
      );
      if (productIndex !== -1) {
        state.products[productIndex] = product;
      }
    },
    remove: (state, action: PayloadAction<{ id: string }>) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload.id
      );
    },
  },
});

export const { create, edit, remove } = productSlice.actions;
export default productSlice.reducer;
