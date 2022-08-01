import React from 'react';
import classes from './productItemCard.module.css';

function ProductItemCard(props){
    return (
        <div className={classes.card}>
            <div className={classes.image}><img src = {props.image} alt = "Sneakers"></img></div>
            <div className={classes.details}>
                <p className={classes.company}>{props.company}</p>
                <p className={classes.product}>{props.product}</p>
                <p>{props.rating}</p>
                <p className={classes.sizeQty}>Size: s&nbsp;&nbsp;&nbsp;Qty: {props.quantity}</p>
                <p className={classes.price}>&#8377;{props.sp}&nbsp;&nbsp;
                    <span className={classes.mrp}>&#8377;{props.mrp}</span>
                    <span className={classes.discount}>&nbsp;&nbsp;({props.discount}% off)</span>
                </p>
            </div>
        </div>
    );
}

export default ProductItemCard;