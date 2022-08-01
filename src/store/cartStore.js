import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {items: []};

const cartSlice = createSlice({
    name: 'cartItems',
    initialState: initialCartState,
    reducers: {
        addItem(state, action){
            const newItem = action.payload;
            const existItem = state.items.find(item => item.id === newItem.id);
            if(!existItem){
                state.items.push({
                    id: newItem.id,
                    image: newItem.image,
                    company: newItem.company,
                    product: newItem.product,
                    rating: newItem.rating,
                    sp: newItem.sp,
                    mrp: newItem.mrp,
                    discount: newItem.discount,
                    quantity: 1,
                });
            }
            else{
                existItem.quantity++;
                existItem.mrp = existItem.mrp + newItem.mrp;
                existItem.sp = existItem.sp + newItem.sp;
            }
        }
    }
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;