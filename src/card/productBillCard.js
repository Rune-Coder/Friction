import React from 'react';
import classes from './productBillCard.module.css';

function ProductBillCard(props){
    return(
        <div className={classes.cartBill}>
           <p>PRICE DETAILS(n items)</p>
           <ul>
                <li>Total MRP</li>
                <li>&#8377;x</li>
           </ul>
           <ul>
                <li>Discount on MRP</li>
                <li>-&#8377;y</li>
           </ul>
           <ul>
                <li>Delivery Fee</li>
                <li>&#8377;d</li>
           </ul>
           <hr />
           <ul className={classes.total}>
                <li>Total Amount</li>
                <li>&#8377;z</li>
           </ul>
           <button type='button' className={classes.proceed}>PROCEED TO BUY</button>
        </div>
    );
}

export default ProductBillCard;