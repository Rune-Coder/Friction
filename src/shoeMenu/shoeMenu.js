import React from 'react';
import classes from './shoeMenu.module.css';

function ShoeMenu(props) {
    return(
        <div className={classes.menu}>
            <ul>
                <li>Men<div className={classes.types}>
                    <ul>hello
                        {props.shoe1}
                    </ul>
                    <ul>hello
                        <li>hi</li>
                    </ul>
                </div></li>
                <li>Women</li>
                <li>Kids</li>
            </ul>
        </div>
    );
}

export default ShoeMenu;