import React from 'react';
import classes from './checkoutMenu.module.css';

function CheckoutMenu(props){
    return(
        <div className={classes.menu}>
            <ul className={classes.menuList}>
                <li className={classes.active}>B A G</li>
                <li><hr /></li>
                <li>A D D R E S S</li>
                <li><hr /></li>
                <li>P A Y M E N T</li>
            </ul>
        </div>
    );
}

export default CheckoutMenu;