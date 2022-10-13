import React, { useState } from 'react';
import classes from './shoeMenu.module.css';
import {CasualsData, SportsData} from './shoeMenuData';

function ShoeMenu(props) {
    const [addTypesMen, setAddTypesMen] = useState(false);
    const [addTypesWomen, setAddTypesWomen] = useState(false);
    const [addTypesKids, setAddTypesKids] = useState(false);

    function typesHandlerMen(event){
        if(addTypesMen === true)
            setAddTypesMen(false);
        else
            setAddTypesMen(true);
        return;
    }
    function typesHandlerWomen(event){
        if(addTypesWomen === true)
            setAddTypesWomen(false);
        else
            setAddTypesWomen(true);
        return;
    }
    function typesHandlerKids(event){
        if(addTypesKids === true)
            setAddTypesKids(false);
        else
            setAddTypesKids(true);
        return;
    }

    return(
        <div className={classes.shoeAccordian}>
            <div className={classes.menu}>
                <ul>
                    <li onMouseOver = {typesHandlerMen} onMouseOut = {typesHandlerMen}>Men</li>
                    <li onMouseOver = {typesHandlerWomen} onMouseOut = {typesHandlerWomen}>Women</li>
                    <li onMouseOver = {typesHandlerKids} onMouseOut = {typesHandlerKids}>Kids</li>
                </ul>
            </div>
            <div className = {`${classes.types} ${addTypesMen && classes.activeTypes}  ${!addTypesMen && ''}`}>
                <div>
                    <span className={classes.typeHead}>Casual Wear</span>
                    <CasualsData />
                </div>
                <div>
                    <span className={classes.typeHead}>Sports Wear</span>
                    <SportsData />
                </div>
                <div>
                    <span className={classes.typeHead}>Formal Wear</span>
                </div>
            </div>
            <div className = {`${classes.types} ${addTypesWomen && classes.activeTypes}  ${!addTypesWomen && ''}`}>hello2</div>
            <div className = {`${classes.types} ${addTypesKids && classes.activeTypes}  ${!addTypesKids && ''}`}>hello3</div>
        </div>
    );
}

export default ShoeMenu;