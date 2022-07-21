import React from 'react';
import classes from './advertise.module.css';

function Advertise(props) {
    return(
        <div className={classes.advertise}>
            <div className={classes.characteristics}>
                <div>Easy Exchange</div>
                <div>100% Handpicked</div>
                <div>Assured Quality</div>
            </div>
            <div className={classes.app}>
                <p>Experience the shoe mobile app</p>
                <button>Get it on Google Play</button>
                <button>Download on the App Store</button>
            </div>
        </div>
    );
}

export default Advertise;