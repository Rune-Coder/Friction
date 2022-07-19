import React, { Fragment } from 'react';
import classes from './navCart.module.css';
import CartIcon from '../icons/cartIcon';

function NavCart(){
    return(
        <Fragment>
            <span className= {classes.cart}>
                <CartIcon />
            </span> 
            <span>Cart</span>
            
        </Fragment>
    );
}

export default NavCart;