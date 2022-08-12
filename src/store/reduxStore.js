import { configureStore } from "@reduxjs/toolkit";
import cartSlice from './cartStore';
import wishSlice from './wishStore';

const store = configureStore({
    reducer: {cart: cartSlice, wish: wishSlice},
});

export default store;