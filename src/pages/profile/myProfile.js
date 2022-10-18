import React, { useEffect } from 'react';

import { useSelector } from 'react-redux';

import classes from './myProfile.module.css';

function MyProfile(props){

    const loginSub = useSelector((state) => state.login.loggedin);
    const userSub = useSelector((state) => state.login.userData);

    
    useEffect(() => {
        document.title = 'Profile';
    });
    return (
        <div className={classes.profile}>
            <div>
                <p className={classes.head}>Profile Details</p>
                <div className={classes.accDetails}>
                    <div>Full Name</div>
                    {loginSub && <div>{userSub.name}</div>}
                    {!loginSub && <div>- not added -</div>}

                    <div>Mobile Number</div>
                    {loginSub && <div>{userSub.mobile}</div>}
                    {!loginSub && <div>- not added -</div>}

                    <div>Email ID</div>
                    {loginSub && <div>{userSub.email}</div>}
                    {!loginSub && <div>- not added -</div>}

                    <div>Gender</div>
                    {loginSub && <div>{userSub.gender}</div>}
                    {!loginSub && <div>- not added -</div>}
                </div>
                <button type= "button" className={classes.save}>EDIT</button>
            </div>
        </div>
    );
}

export default MyProfile;