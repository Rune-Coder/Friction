import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { wishActions } from '../store/wishStore';
import { cartActions } from '../store/cartStore';

import WishAlertCard from './wishAlertCard';
import CloseIcon from '../icons/closeIcon';
import classes from './wishCard.module.css';

function WishCard(props) {
    const [size, setSize] = useState(false);

    let navigate = useNavigate();
    function routeChange(){ 
        let path = `/shoes/`+props.company.toLowerCase()+'-'+props.product.toLowerCase(); 
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
    function addItem(size){
        sizeHandler();
        if(size === "0")
            return;
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
            sz: size,
            delfee: 0,
        }));
    
        remItem();
        return;
    }

    function sizeHandler(event){
        if(size)
            setSize(false);
        else
            setSize(true);
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
                <button type='button' className={classes.bag} onClick = {sizeHandler}>MOVE TO BAG</button>
                <span className={classes.close} onClick = {remItem}><CloseIcon /></span>
           </div>

           {size && <div className= {classes.backdrop}/>}
            {size && <div className={classes.wishAlert}><WishAlertCard confirmSize = {addItem} /></div>}

        </div>
    );
}

export default WishCard;