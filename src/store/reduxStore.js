import { createStore } from redux;
import { createSlice } from "@reduxjs/toolkit";

const initialCart = {addItems: false};

function cartReducer(state = initialCart, action){
    if(action.type === 'add'){
        return{
            addItems: !state.addItems
        };
    }
    return state;
}

const store = createStore(cartReducer);

export default store;