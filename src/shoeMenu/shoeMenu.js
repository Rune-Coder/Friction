import React from 'react';
import classes from './shoeMenu.module.css';

function ShoeMenu(props) {
    return(
        <div className={classes.menu}>
            <ul>
                <li>Men</li>
                <li>Women</li>
                <li>Kids</li>
            </ul>
        </div>
    );
}

export default ShoeMenu;