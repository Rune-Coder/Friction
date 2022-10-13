import React from 'react';
import classes from './shoeMenuData.module.css';

function CasualsData(){
    return(
        <ul className={classes.shoeList}>
            <li>Sneakers</li>
            <li>Boots</li>
            <li>Loafers</li>
            <li>Boats</li>
            <li>Driving</li>
            <li>Slip-ons</li>
        </ul>
    );
}

function SportsData(){
    return(
        <ul className={classes.shoeList}>
            <li>Walking</li>
            <li>Running</li>
        </ul>
    );
}

export {CasualsData, SportsData};