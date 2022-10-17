import { createSlice } from "@reduxjs/toolkit";


const initialLoginState = {
    token: '', 
    userData: {},
    loggedin: false
};

const loginSlice = createSlice({
    name: 'login',
    initialState: initialLoginState,
    reducers: {
        login(state, action){
            const user = action.payload;
            state.token = user.token;
            state.userData = {
                _id: user._id,
                name: user.name,
                mobile: user.mobile,
                email: user.email,
                gender: user.gender,
                isAdmin: user.isAdmin
            };
            state.loggedin = true;
        }
    },
});

export const loginActions = loginSlice.actions;

export default loginSlice.reducer;