import React from 'react';
import classes from './productBillCard.module.css';

function ProductBillCard(props){
    return(
        <div className={classes.cartBill}>
           <p>PRICE DETAILS({props.itemQty} items)</p>
           <ul>
                <li>Total MRP</li>
                <li>&#8377;{props.tmrp}</li>
           </ul>
           <ul>
                <li>Discount on MRP</li>
                <li>-&#8377;{props.tdis}</li>
           </ul>
           <ul>
                <li>Delivery Fee</li>
                <li>&#8377;{props.tdelfee}</li>
           </ul>
           <hr />
           <ul className={classes.total}>
                <li>Total Amount</li>
                <li>&#8377;{props.amount}</li>
           </ul>
           <button type='button' className={classes.proceed}>PROCEED TO BUY</button>
        </div>
    );
}

export default ProductBillCard;