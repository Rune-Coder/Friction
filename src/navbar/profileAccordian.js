import React from 'react';
import { useNavigate } from 'react-router-dom';
import classes from './profileAccordian.module.css';

function ProfileAccordian(props) {

    let navigate = useNavigate(); 

    function toLogin(){ 
        let path = `/login`; 
        navigate(path);
    }

    return(
        <ul className={classes.profileList}>
            <p className={classes.head}>Hello User</p>
            <p className={classes.subHead}>Sign up to access your Friction account</p>
            <li onClick={toLogin}>Sign Up</li>
            <li>My Orders</li>
        </ul>
    );
}

export default ProfileAccordian;