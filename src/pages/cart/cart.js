import React from 'react';
import ProductItemCard from '../../card/productItemCard';
import ProductBillCard from '../../card/productBillCard';
import classes from './cart.module.css';

function Cart(props){
    return (
        <div className={classes.cart}>
            <div className={classes.cartItems}>
                <ProductItemCard />
                <ProductItemCard />
            </div>
            <div className={classes.cartBill}><ProductBillCard /></div>
        </div>
    );
}

export default Cart;