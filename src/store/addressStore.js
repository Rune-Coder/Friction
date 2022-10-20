import { createSlice } from "@reduxjs/toolkit";

const initialAddressState = { currAddress: {} };

const addressSlice = createSlice({
    name: 'address',
    initialState: initialAddressState,
    reducers: {
        addAddress(state, action){
            const address = action.payload;
            state.currAddress = {
                name : address.name,
                mob : address.mobile,
                house : address.house,
                town : address.town,
                landmark : address.landmark,
                city : address.city,
                state : address.state,
                pin : address.pin
            };
            console.log(state.currAddress);
        },
        remAddress(state){
            state.currAddress = {};
            localStorage.removeItem("products");
            localStorage.removeItem("billStore");
        }
    },
});



export const addressActions = addressSlice.actions;

export default addressSlice.reducer;