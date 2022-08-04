import React from 'react';
import TrashIcon from '../icons/trashIcon';

import { useDispatch } from 'react-redux';
import { cartActions } from '../store/cartStore';

import classes from './productItemCard.module.css';

function ProductItemCard(props){
    const dispatch = useDispatch();

    function remItem(event){
        dispatch(cartActions.removeItem({
            id: props.id,
            sz: props.size,
        }));
    }
    function qtyHandler(event){
        dispatch(cartActions.open({
            id: props.id,
            topic: "q",
            sz: props.size,
            qty: props.quantity,
        }));
    }

    return (
        <div className={classes.card}>
            <div className={classes.image}><img src = {props.image} alt = "Sneakers"></img></div>
            <div className={classes.details}>
                <ul className={classes.header}>
                    <li className={classes.company}>{props.company}</li>
                    <li><span className={classes.close} onClick={remItem}><TrashIcon /></span></li>
                </ul>
                <p className={classes.product}>{props.product}</p>
                <p>{props.rating}</p>
                <p className={classes.sizeQty}>Size: {props.size}&nbsp;&nbsp;&nbsp;<span onClick={qtyHandler}>Qty: {props.quantity}</span></p>
                <p className={classes.price}>&#8377;{props.sp}&nbsp;&nbsp;
                    <span className={classes.mrp}>&#8377;{props.mrp}</span>
                    <span className={classes.discount}>&nbsp;&nbsp;({props.discount}% off)</span>
                </p>
            </div>
        </div>
    );
}

export default ProductItemCard;