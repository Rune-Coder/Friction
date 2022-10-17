import { configureStore } from "@reduxjs/toolkit";
import productSlice from './productStore';
import cartSlice from './cartStore';
import wishSlice from './wishStore';
import loginSlice from './loginStore';

const store = configureStore({
    reducer: {cart: cartSlice, wish: wishSlice, product: productSlice, login: loginSlice},
});

export default store;