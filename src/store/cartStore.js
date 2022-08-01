import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {items: [], bill: [{ tmrp: 0, tdis: 0, tdelfee: 0, amount: 0}]};

const cartSlice = createSlice({
    name: 'cartItems',
    initialState: initialCartState,
    reducers: {
        addItem(state, action){
            const newItem = action.payload;
            const existItem = state.items.find(item => item.id === newItem.id && item.sz === newItem.sz);

            if(existItem && existItem.quantity === 10){
                return;
            }
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
                    sz: newItem.sz,
                    delfee: newItem.delfee,
                });
            }
            else{
                existItem.quantity++;
                existItem.mrp = existItem.mrp + newItem.mrp;
                existItem.sp = existItem.sp + newItem.sp;
            }

            state.bill[0].tmrp = state.bill[0].tmrp + newItem.mrp;
            state.bill[0].tdis = state.bill[0].tdis + newItem.mrp - newItem.sp;
            state.bill[0].tdelfee = state.bill[0].tdelfee + newItem.delfee;
            state.bill[0].amount = state.bill[0].tmrp - state.bill[0].tdis + state.bill[0].tdelfee;
        },
        removeItem(state, action){
            const delItem = action.payload;
            const existItem = state.items.find(item => item.id === delItem.id && item.sz === delItem.sz);

            state.bill[0].tmrp = state.bill[0].tmrp - existItem.mrp;
            state.bill[0].tdis = state.bill[0].tdis - existItem.mrp + existItem.sp;
            state.bill[0].tdelfee = state.bill[0].tdelfee - existItem.delfee;
            state.bill[0].amount = state.bill[0].tmrp - state.bill[0].tdis + state.bill[0].tdelfee;;


            state.items = state.items.filter(item => item.id !== delItem.id || item.sz !== delItem.sz);
        }
    }
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;