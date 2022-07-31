import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {showItems: true};

const cartSlice = createSlice({
    name: 'showItems',
    initialState: initialCartState,
    reducers: {
        addItem(state){
            state.showItems = !state.showItems;
        }
    }
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;