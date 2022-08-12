import React from 'react';

import { useNavigate } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { wishActions } from '../store/wishStore';
import { cartActions } from '../store/cartStore';

import CloseIcon from '../icons/closeIcon';
import classes from './wishCard.module.css';

function WishCard(props) {
    let navigate = useNavigate();
    function routeChange(){ 
        let path = `/shoes`; 
        navigate(path, {state:{
            key: props.id,
            id : props.id, 
            image : props.image,
            company : props.company, 
            product : props.product, 
            rating : props.rating, 
            sp : props.sp, 
            mrp : props.mrp, 
            discount : props.discount
        }});
    }

    const dispatch = useDispatch();
    function addItem(event){
        dispatch(cartActions.addItem({
            id: props.id,
            image: props.image,
            company: props.company,
            product: props.product,
            rating: props.rating,
            sp: props.sp,
            mrp: props.mrp,
            discount: props.discount,
            quantity: 1,
            sz: 6,
            delfee: 0,
        }));

        remItem();
        return;
    }

    function remItem(event){
        dispatch(wishActions.removeItem({
            id: props.id,
        }));
    }

    return(
        <div className={classes.card}>
            <div className={classes.image} onClick = {routeChange}>
                <img src = {props.image} alt = "Shoe"></img>
           </div>
           <div className={classes.desc}>
                <p>{props.product}</p>
                <p className={classes.price}>&#8377;{props.sp}&nbsp;
                    <span className={classes.mrp}>&#8377;{props.mrp}</span>&nbsp;
                    <span className={classes.discount}>({props.discount}% off)</span>
                </p>
                <button type='button' className={classes.bag} onClick = {addItem}>MOVE TO BAG</button>
                <span className={classes.close} onClick = {remItem}><CloseIcon /></span>
           </div>

        </div>
    );
}

export default WishCard;