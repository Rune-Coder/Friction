import React from 'react';
import classes from './productBillCard.module.css';

function ProductBillCard(props){
    return (
        <div className={classes.card}>
            <div className={classes.image}>image</div>
            <div className={classes.details}>
                <p className={classes.company}>Company Name</p>
                <p className={classes.product}>Product Name</p>
                <p>Rating</p>
                <p>Size&nbsp;&nbsp;&nbsp;Qty</p>
                <p className={classes.price}>&#8377;x&nbsp;&nbsp;
                    <span className={classes.mrp}>&#8377;y</span>
                    <span className={classes.discount}>&nbsp;&nbsp;(z% off)</span>
                </p>
            </div>
        </div>
    );
}

export default ProductBillCard;