import React from 'react';
import classes from './shoeMenu.module.css';

function ShoeMenu(props) {
    return(
        <div className={classes.menu}>
            <ul>
                <li>Men<div className={classes.types}>
                    <ul>hello
                        <li>hi</li>
                        <li>hi</li>
                    </ul>
                    <ul>hello
                        <li>hi</li>
                    </ul>
                </div></li>
                <li>Women<div className={classes.types}>
                    hello
                </div></li>
                <li>Kids<div className={classes.types}>
                    hello
                </div></li>
            </ul>
        </div>
    );
}

export default ShoeMenu;