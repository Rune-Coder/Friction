import React from 'react';

import { useNavigate } from 'react-router-dom';

import classes from './shoeMenuData.module.css';

//MEN SHOES

function CasualsData(props){
    let navigate = useNavigate();

    return(
        <ul className = {`${classes.shoeList} ${props.value && classes.shoeListSmall}  ${!props.value && ''}`} >
            <li onClick = {() => {navigate(`/types/men-sneakers`); window.location.reload();}}>Sneakers</li>
            <li>Boats</li>
            <li>Espadrilles</li>
            <li>Sandals</li>
            <li>Slip-ons</li>
        </ul>
    );
}

function DressData(props){

    return(
        <ul className = {`${classes.shoeList} ${props.value && classes.shoeListSmall}  ${!props.value && ''}`} >
            <li >Derby</li>
            <li >Oxfords</li>
            <li>Brogues</li>
            <li>Monks</li>
            <li>Loafers</li>
        </ul>
    );
}

function BootsData(props){

    return(
        <ul className = {`${classes.shoeList} ${props.value && classes.shoeListSmall}  ${!props.value && ''}`} >
            <li >Chelsea</li>
            <li >Chukka</li>
            <li>Brogues</li>
            <li>Ankle</li>
            <li>Hiking</li>
        </ul>
    );
}

function SportsData(props){
    return(
        <ul className = {`${classes.shoeList} ${props.value && classes.shoeListSmall}  ${!props.value && ''}`} >
            <li>Walking</li>
            <li>Running</li>
            <li>Tennis</li>
            <li>Foootball</li>
            <li>Trainer</li>
            <li>Golf</li>
            <li>Cycling</li>
        </ul>
    );
}

export {CasualsData, DressData, BootsData, SportsData};

//WOMEN SHOES