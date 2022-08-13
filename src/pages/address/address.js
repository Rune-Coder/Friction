import React from 'react';

import { useLocation } from 'react-router-dom';

import CheckoutMenu from '../cart/checkoutMenu';
import ProductBillCard from '../../card/productBillCard';
import AddressForm from './addressForm';
import classes from './address.module.css';

function Address(props){
    const location = useLocation();

    return(
        <div>
            <div>
                <CheckoutMenu value = "add" />
            </div>
            <div className={classes.address}>
                <div className={classes.form}>
                    <AddressForm />
                </div>
                <ProductBillCard 
                    tmrp = {location.state.tmrp} 
                    tdis = {location.state.tdis} 
                    tdelfee = {location.state.tdelfee} 
                    amount = {location.state.amount} 
                    itemQty = {location.state.itemQty}
                    value = {"info"}
                />
            </div>
        </div>
    );
}

export default Address;