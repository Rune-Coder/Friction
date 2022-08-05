import React from 'react';
import classes from './checkoutMenu.module.css';

function CheckoutMenu(props){
    return(
        <div className={classes.menu}>
            <ul className={classes.menuList}>
                <li className={classes.menuItems}>
                    <div className={classes.menuSeq}>1</div>
                    <div>BAG</div>
                </li>
                <li><hr /></li>
                <li className={classes.menuItems}>
                    <div className={classes.menuSeq}>2</div>
                    <div>ADDRESS</div>
                </li>
                <li><hr /></li>
                <li className={classes.menuItems}>
                    <div className={classes.menuSeq}>3</div>
                    <div>PAYMENT</div>
                </li>
            </ul>
        </div>
    );
}

export default CheckoutMenu;