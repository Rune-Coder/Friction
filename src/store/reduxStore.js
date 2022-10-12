import { configureStore } from "@reduxjs/toolkit";
import productSlice from './productStore';
import cartSlice from './cartStore';
import wishSlice from './wishStore';

const store = configureStore({
    reducer: {cart: cartSlice, wish: wishSlice, product: productSlice},
});

export default store;