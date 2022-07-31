import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartStore';

const store = configureStore({
    reducer: cartReducer
});

export default store;