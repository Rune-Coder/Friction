import React from 'react';

import { useNavigate } from 'react-router-dom';

import classes from './shoeMenuData.module.css';

//MEN SHOES

function CasualsData(){
    let navigate = useNavigate();

    return(
        <ul className={classes.shoeList}>
            <li onClick = {() => navigate(`/types/men-sneakers`)}>Sneakers</li>
            <li onClick = {() => navigate(`/types/men-boots`)}>Boots</li>
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

//WOMEN SHOES