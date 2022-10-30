import React from 'react';

import { useNavigate } from 'react-router-dom';

import classes from './shoeMenuData.module.css';

//MEN SHOES

function CasualsData(props){
    let navigate = useNavigate();

    return(
        <ul className = {`${classes.shoeList} ${props.value && classes.shoeListSmall}  ${!props.value && ''}`} >
            <li onClick = {() => {navigate(`/types/men-sneakers`); window.location.reload();}}>Sneakers</li>
            <li onClick = {() => {navigate(`/types/men-boats`); window.location.reload();}}>Boats</li>
            <li onClick = {() => {navigate(`/types/men-espadrilles`); window.location.reload();}}>Espadrilles</li>
            <li onClick = {() => {navigate(`/types/men-sandals`); window.location.reload();}}>Sandals</li>
        </ul>
    );
}

function DressData(props){
    let navigate = useNavigate();

    return(
        <ul className = {`${classes.shoeList} ${props.value && classes.shoeListSmall}  ${!props.value && ''}`} >
            <li onClick = {() => {navigate(`/types/men-derbys`); window.location.reload();}}>Derby</li>
            <li onClick = {() => {navigate(`/types/men-oxfords`); window.location.reload();}}>Oxfords</li>
            <li onClick = {() => {navigate(`/types/men-brogues`); window.location.reload();}}>Brogues</li>
            <li onClick = {() => {navigate(`/types/men-monks`); window.location.reload();}}>Monks</li>
            <li onClick = {() => {navigate(`/types/men-loafers`); window.location.reload();}}>Loafers</li>
        </ul>
    );
}

function BootsData(props){
    let navigate = useNavigate();
    
    return(
        <ul className = {`${classes.shoeList} ${props.value && classes.shoeListSmall}  ${!props.value && ''}`} >
            <li onClick = {() => {navigate(`/types/men-chelsea`); window.location.reload();}}>Chelsea</li>
            <li onClick = {() => {navigate(`/types/men-chukka`); window.location.reload();}}>Chukka</li>
            <li onClick = {() => {navigate(`/types/men-brogues`); window.location.reload();}}>Brogues</li>
            <li onClick = {() => {navigate(`/types/men-ankle`); window.location.reload();}}>Ankle</li>
            <li onClick = {() => {navigate(`/types/men-hiking`); window.location.reload();}}>Hiking</li>
        </ul>
    );
}

function SportsData(props){
    let navigate = useNavigate();

    return(
        <ul className = {`${classes.shoeList} ${props.value && classes.shoeListSmall}  ${!props.value && ''}`} >
            <li onClick = {() => {navigate(`/types/men-walking`); window.location.reload();}}>Walking</li>
            <li onClick = {() => {navigate(`/types/men-football`); window.location.reload();}}>Foootball</li>
            <li onClick = {() => {navigate(`/types/men-golf`); window.location.reload();}}>Golf</li>
            <li onClick = {() => {navigate(`/types/men-cycling`); window.location.reload();}}>Cycling</li>
        </ul>
    );
}

export {CasualsData, DressData, BootsData, SportsData};

//WOMEN SHOES