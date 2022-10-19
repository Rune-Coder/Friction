import React, { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import CheckoutMenu from '../cart/checkoutMenu';
import ProductBillCard from '../../card/productBillCard';
import AddressForm from './addressForm';
import classes from './address.module.css';

function Address(props){
    let navigate = useNavigate();

    var bill;
    if(localStorage.getItem("billStore")){
        bill = JSON.parse(localStorage.getItem("billStore"));
        if(bill.tmrp === 0)
            navigate(`/`, { replace: true });
    }
    else{
        navigate(`/`, { replace: true });
    }

    useEffect(() => {
        document.title = 'ADDRESS';
    });

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
                    tmrp = {bill[0].tmrp} 
                    tdis = {bill[0].tdis} 
                    tdelfee = {bill[0].tdelfee} 
                    amount = {bill[0].amount} 
                    itemQty = {bill[0].len}
                    value = {"info"}
                />
            </div>
        </div>
    );
}

export default Address;