import React from 'react';
import classes from './productItemCard.module.css';

function ProductItemCard(props){
    return (
        <div className={classes.card}>
            <div className={classes.image}>image</div>
            <div className={classes.details}>
                <p className={classes.company}>Company Name</p>
                <p className={classes.product}>Product Name</p>
                <p>Rating</p>
                <p className={classes.sizeQty}>Size: s&nbsp;&nbsp;&nbsp;Qty: q</p>
                <p className={classes.price}>&#8377;x&nbsp;&nbsp;
                    <span className={classes.mrp}>&#8377;y</span>
                    <span className={classes.discount}>&nbsp;&nbsp;(z% off)</span>
                </p>
            </div>
        </div>
    );
}

export default ProductItemCard;