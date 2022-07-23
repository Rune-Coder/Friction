import React from 'react';
import classes from './shoeMenu.module.css';

function ShoeMenu(props) {
    return(
        <div className={classes.shoeAccordian}>
            <div className={classes.menu}>
                <ul>
                    <li>Men</li>
                    <li>Women</li>
                    <li>Kids</li>
                    <li>Sports</li>
                </ul>
            </div>
            <div className={classes.types}>hello</div>
        </div>
    );
}

export default ShoeMenu;