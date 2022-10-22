import React from 'react';

import { useNavigate } from 'react-router-dom';

import classes from './shoeMenuData.module.css';

//MEN SHOES

function CasualsData(props){
    let navigate = useNavigate();

    return(
        <ul className = {`${classes.shoeList} ${props.value && classes.shoeListSmall}  ${!props.value && ''}`} >
            <li onClick = {() => {navigate(`/types/men-sneakers`); window.location.reload();}}>Sneakers</li>
            <li onClick = {() => {navigate(`/types/men-boots`); window.location.reload();}}>Boots</li>
            <li>Loafers</li>
            <li>Boats</li>
            <li>Driving</li>
            <li>Slip-ons</li>
        </ul>
    );
}

function SportsData(props){
    return(
        <ul className = {`${classes.shoeList} ${props.value && classes.shoeListSmall}  ${!props.value && ''}`} >
            <li>Walking</li>
            <li>Running</li>
        </ul>
    );
}

export {CasualsData, SportsData};

//WOMEN SHOES