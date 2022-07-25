import React, { useState } from 'react';
import classes from './shoeMenu.module.css';

function ShoeMenu(props) {
    const [addTypes, setAddTypes] = useState(false);
    function typesHandler(event){
        if(addTypes === true)
            setAddTypes(false);
        else
            setAddTypes(true);
        return;
    }

    return(
        <div className={classes.shoeAccordian}>
            <div className={classes.menu}>
                <ul>
                    <li onMouseOver = {typesHandler} onMouseOut = {typesHandler}>Men</li>
                    <li onMouseOver = {typesHandler} onMouseOut = {typesHandler}>Women</li>
                    <li onMouseOver = {typesHandler} onMouseOut = {typesHandler}>Kids</li>
                </ul>
            </div>
            <div className = {`${classes.types} ${addTypes && classes.activeTypes}  ${!addTypes && ''}`}>hello</div>
        </div>
    );
}

export default ShoeMenu;