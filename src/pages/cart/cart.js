import React from 'react';

import { useSelector } from 'react-redux';

import ProductItemCard from '../../card/productItemCard';
import ProductBillCard from '../../card/productBillCard';
import AlertCard from '../../card/alertCard';
import classes from './cart.module.css';

function Cart(props){
    const itemList = useSelector((state) => state.items);
    const items = itemList.map((shoe) => (
        <ProductItemCard 
            key = {shoe.id} 
            id = {shoe.id} 
            image = {shoe.image} 
            company = {shoe.company} 
            product = {shoe.product} 
            rating = {shoe.rating} 
            sp = {shoe.sp} 
            mrp = {shoe.mrp} 
            discount = {shoe.discount}
            quantity = {shoe.quantity}
            size = {shoe.sz}
        />
    ));

    const billUpdate = useSelector((state) => state.bill);
    const billItems = billUpdate.map((shoe) => (
        <ProductBillCard 
            tmrp = {shoe.tmrp} 
            tdis = {shoe.tdis} 
            tdelfee = {shoe.tdelfee} 
            amount = {shoe.amount} 
            itemQty = {shoe.len}
        />
    ));

    const alertBox = useSelector((state) => state.openAlert);


    return (
        <div className={classes.cart}>
            <div className={classes.cartItems}>
                {items}
            </div>
            <div className={classes.cartBill}>{billItems}</div>
            {alertBox && <div className={classes.alert}><AlertCard /></div>}
        </div>
    );
}

export default Cart;