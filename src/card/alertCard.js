import React from 'react';
import classes from './alertCard.module.css';

function AlertCard(props){
    return(
        <div className={classes.cardLayout}>
            <p>x</p>
            <p>Select Size</p>
            <button type = "button">DONE</button>
        </div>
    );
}

export default AlertCard;