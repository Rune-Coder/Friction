import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { wishActions } from '../store/wishStore';

import StarRating from './starRating';
import HeartIcon from '../icons/heartIcon';
import classes from './productCard.module.css';

function ProductCard(props) {
    const loginSub = useSelector((state) => state.login.loggedin);
    let navigate = useNavigate();

    function routeChange(){ 
        let path = `/shoes/`+props.company.toLowerCase()+'-'+props.product.toLowerCase()+'/'+props.id; 
        navigate(path);
    }

    const dispatch = useDispatch();

    const [addWish, setAddWish] = useState(false);
    function wishHandler(event){
        event.stopPropagation();

        //authenticate
        if(!loginSub){
            navigate(`/login`);
            return;
        }

        if(addWish)
            setAddWish(false);
        else
            setAddWish(true);

        dispatch(wishActions.addItem({
            id: props.id,
            image: props.image,
            company: props.company,
            product: props.product,
            rating: props.rating,
            sp: props.sp,
            mrp: props.mrp,
            discount: props.discount,
        }));

        return; 
    }
    return(
        <div className={classes.card} onClick = {routeChange}>
           <div className={classes.image}>
                <img src = {props.image} alt = "Shoe"></img>
           </div>
           <div className={classes.desc}>
                <span>{props.company}</span>
                <p className={classes.pName}>{props.product}</p>
                <p className={classes.rating}>
                    <StarRating stars={props.rating}/>{props.rating}
                </p>
                <ul className={classes.priceCart}>
                    <li className={classes.price}>&#8377;{props.sp} <span className={classes.mrp}>
                        &#8377;{props.mrp}</span> <span className={classes.discount}>({props.discount}% off)</span>
                    </li>
                    <li onClick={wishHandler}><span className = {`${classes.wishList} ${addWish && classes.activeWish} ${!addWish && ''}`}><HeartIcon /></span></li>
                </ul>
           </div>
        </div>
    );
}

export default ProductCard;