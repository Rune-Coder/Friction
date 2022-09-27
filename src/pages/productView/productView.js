import React, { useState, useEffect } from 'react';

import { useLocation } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cartStore';
import { wishActions } from '../../store/wishStore';

import StarRating from '../../card/starRating';
import CartIcon from '../../icons/cartIcon';
import HeartIcon from '../../icons/heartIcon';
import ToastCard from '../../card/toastCard';
import classes from './productView.module.css';

function ProductView(props) {

    useEffect(() => {
        document.title = 'Buy '+location.state.company+' '+location.state.product;
    });

    const [size, setSize] = useState("0");
    const [showPara, setShowPara] = useState(false);
    const [showToast, setShowToast] = useState("false");
    const location = useLocation();//send to other page

    const dispatch = useDispatch();

    function sizeHandler(event){
        setSize(event.target.innerText);
        return;
    }

    function addWish(event){
        if(showToast !== "false")
            return;

        dispatch(wishActions.addItem({
            id: location.state.id,
            image: location.state.image,
            company: location.state.company,
            product: location.state.product,
            rating: location.state.rating,
            sp: location.state.sp,
            mrp: location.state.mrp,
            discount: location.state.discount,
        }));

        setShowToast("wishlist");
        setTimeout(function(){ setShowToast("false"); }, 3000);

        return;
    }

    function addItem(event){
        if(showToast !== "false")
            return;
        if(size === "0"){
            setShowPara(true);
            return;
        }
        setShowPara(false);

        dispatch(cartActions.addItem({
            id: location.state.id,
            image: location.state.image,
            company: location.state.company,
            product: location.state.product,
            rating: location.state.rating,
            sp: location.state.sp,
            mrp: location.state.mrp,
            discount: location.state.discount,
            quantity: 1,
            sz: size,
            delfee: 0,
        }));//dispatching value to functions

        setShowToast("bag");
        setTimeout(function(){ setShowToast("false"); }, 3000);

        return;
    }
    function remToast(rem){
        setShowToast("false");
        return;
    } 
    
    return(
        <div className={classes.view}>
            {showToast !== "false" && <div className={classes.toast}> <ToastCard close = {remToast} value = {"Item is added to "+ showToast} /> </div>}

            <div className={classes.image}><img src = {location.state.image} alt = "Sneakers"></img></div>

            <div className={classes.details}>
                <p className={classes.company}>{location.state.company}</p>
                <p className={classes.product}>{location.state.product}</p>
                <p className={classes.rating}><StarRating stars={location.state.rating}/>{location.state.rating}</p>
                <p className={classes.price}>&#8377;{location.state.sp}&nbsp;&nbsp;
                    
                    <span className={classes.mrp}>&#8377;{location.state.mrp}</span>
                    <span className={classes.discount}>&nbsp;&nbsp;({location.state.discount}% off)</span>
                
                </p>
                <p className={classes.tax}>Inclusive of all taxes</p>
                <p>SELECT SIZE (UK)</p>

                <ul className={classes.size}>
                    <li><button className={size === "6" ? classes.sizeActive : ''} onClick={sizeHandler}>6</button></li>
                    <li><button className={size === "7" ? classes.sizeActive : ''} onClick={sizeHandler}>7</button></li>
                    <li><button className={size === "8" ? classes.sizeActive : ''} onClick={sizeHandler}>8</button></li>
                    <li><button className={size === "9" ? classes.sizeActive : ''} onClick={sizeHandler}>9</button></li>
                    <li><button className={size === "10" ? classes.sizeActive : ''} onClick={sizeHandler}>10</button></li>
                </ul>

                {showPara && <p className={classes.sizeWarning}>Please select a size</p>}
                
                <button className={classes.bag} onClick={addItem}>
                    <span className={classes.cartIcon}><CartIcon /></span>
                    &nbsp;&nbsp;&nbsp;
                    ADD TO BAG
                </button>&nbsp;
                <button className={classes.wish} onClick={addWish}>
                    <span className={classes.heartIcon}><HeartIcon /></span>
                    &nbsp;&nbsp;&nbsp;
                    WISHLIST
                </button>
            
            </div>
        </div>
    );
}

export default ProductView;