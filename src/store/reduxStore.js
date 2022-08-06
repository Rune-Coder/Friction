import { configureStore } from "@reduxjs/toolkit";
import cartSlice from './cartStore';

const store = configureStore({
    reducer: cartSlice
});

export default store;