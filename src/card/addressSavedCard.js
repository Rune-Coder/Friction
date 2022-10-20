import React from 'react';
import classes from './addressSavedCard.module.css';

function AddressSavedCard(props){
    return(
        <div className={classes.layout}>
            <p className={classes.head}>Saved Address</p>
            <ul className={classes.address}>
                <li><b>{props.name}</b></li>
                <li>{props.mobile}</li>
                <li>{props.house},</li>
                <li>{props.town},</li>
                {props.landmark !== "" && <li>{props.landmark},</li>}
                <li>{props.city}&nbsp;{props.state}&nbsp;{props.pin}</li>
            </ul>
        </div>
    );
}

export default AddressSavedCard;

