import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loginActions } from '../store/loginStore';

function UserData(token){
    const [user, setUser] = useState({});

    async function getData(token){
        const res = await fetch(`/api/user/profile`, {
            method: "GET",
            headers:{
                Authorization: `Bearer ${token}`
            }
        });
    
        const data = await res.json();
        console.log(token);
        if(res.ok)
            setUser(data);
    }

    useEffect(() =>{
        getData(token);
    }, [token]);

    var loggedin = true;
    const dispatch = useDispatch();
    
    if(Object.keys(user).length === 0){
        token = "";
        loggedin = false;
    }

    

    dispatch(loginActions.loginVerify({
        token: token,
        userData: user,
        loggedin: loggedin
    }));
    
}

export { UserData };