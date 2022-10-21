import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { loginActions } from '../store/loginStore';

import ProfileIcon from '../icons/profileIcon';
import classes from './profileAccordianSmall.module.css';

function ProfileAccordianSmall(props) {

    const loginSub = useSelector((state) => state.login.loggedin);
    const userSub = useSelector((state) => state.login.userData);
    const [showAccordian, setShowAccordian] = useState(false);

    let navigate = useNavigate(); 
    const dispatch = useDispatch();

    function toLogin(){ 
        let path = `/login`; 
        navigate(path);
    }

    function toLogout(){ 
        dispatch(loginActions.logout({}));
        window.location.reload();
    }

    function toProfile(){ 
        props.close(true);
        let path = `/profile`; 
        navigate(path);
    }

    function toOrders(){ 
        props.close(true);
        let path = `/orders`; 
        navigate(path);
    }

    function showAcc(event){
        if(showAccordian === true)
            setShowAccordian(false);
        else
            setShowAccordian(true);
        return;
    }

    return(
        <ul className={classes.profileList} onClick = {showAcc}>
            {!loginSub && <p className={classes.head}>
                <span className={classes.profileIcon}><ProfileIcon /></span>&nbsp;Hello&nbsp;User
            </p>}
            {loginSub && <p className={classes.head}>
                <span className={classes.profileIcon}><ProfileIcon /></span>&nbsp;Hello&nbsp;{userSub.name.split(" ")[0]}
            </p>}

            {showAccordian && <ul className={classes.profileAccordian}>

                {!loginSub && <li onClick={toLogin}>Sign&nbsp;Up</li>}
                {loginSub && <li onClick={toProfile}>Edit&nbsp;Profile</li>}

                <li onClick={toOrders}>My&nbsp;Orders</li>
                {loginSub && <li onClick={toLogout}>Log&nbsp;Out</li>}

            </ul>}
           
        </ul>
    );
}

export default ProfileAccordianSmall;