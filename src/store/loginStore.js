import { createSlice } from "@reduxjs/toolkit";
import { SetCookie, GetCookie, RemoveCookie } from "../hooks/cookies";


const initialLoginState = {
    token: GetCookie("token") ? GetCookie("token") : '', 
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
            SetCookie("token", user.token);
            localStorage.removeItem("products");
            localStorage.removeItem("billStore");
        },
        logout(state){
            state.token = '';
            state.userData = {};
            state.loggedin = false;
            RemoveCookie("token");
        }
    },
});

export const loginActions = loginSlice.actions;

export default loginSlice.reducer;