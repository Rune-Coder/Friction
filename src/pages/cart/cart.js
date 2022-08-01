import React from 'react';

import { useSelector } from 'react-redux';

import ProductItemCard from '../../card/productItemCard';
import ProductBillCard from '../../card/productBillCard';
import classes from './cart.module.css';

function Cart(props){
    const itemList = useSelector((state) => state.items);
    const items = itemList.map((shoe) => (
        <ProductItemCard 
            key = {shoe.id} 
            image = {shoe.image} 
            company = {shoe.company} 
            product = {shoe.product} 
            rating = {shoe.rating} 
            sp = {shoe.sp} 
            mrp = {shoe.mrp} 
            discount = {shoe.discount}
            quantity = {shoe.quantity}
        />
    ));
    return (
        <div className={classes.cart}>
            <div className={classes.cartItems}>
                {items}
            </div>
            <div className={classes.cartBill}><ProductBillCard /></div>
        </div>
    );
}

export default Cart;