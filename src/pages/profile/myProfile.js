import React, { useEffect } from 'react';

import classes from './myProfile.module.css';

function MyProfile(props){
    useEffect(() => {
        document.title = 'Profile';
    });
    return (
        <div className={classes.profile}>
            <div>
                <p className={classes.head}>Profile Details</p>
                <div className={classes.accDetails}>
                    <div>Full Name</div>
                    <div>Sukla Dutta</div>
                    <div>Mobile Number</div>
                    <div>9433139947</div>
                    <div>Email ID</div>
                    <div>- not added -</div>
                    <div>Gender</div>
                    <div>FEMALE</div>
                </div>
                <button type= "button" className={classes.save}>EDIT</button>
            </div>
        </div>
    );
}

export default MyProfile;