import React, { useState } from 'react';
import StarRating from './starRating';
import HeartIcon from '../icons/heartIcon';
import classes from './productCard.module.css';

function ProductCard(props) {
    const [addWish, setAddWish] = useState(false);
    function wishHandler(event){
        if(addWish === true)
            setAddWish(false);
        else
            setAddWish(true);
        return;
    }
    return(
        <div className={classes.card}>
           <div className={classes.image}>
                <img src = {props.image} alt = "Sneakers"></img>
           </div>
           <div className={classes.desc}>
            {props.company}
            <p className={classes.pName}>{props.product}</p>
            <p className={classes.rating}>
                <StarRating />{props.rating}
            </p>
            <ul className={classes.priceCart}>
                <li className={classes.price}>&#8377;{props.sp} <span className={classes.mrp}>
                    &#8377;{props.mrp}</span> <span className={classes.discount}>({props.discount}% off)</span>
                </li>
                <li><span className = {`${classes.wishList} ${addWish && classes.activeWish}  ${!addWish && ''}`} onClick={wishHandler}><HeartIcon /></span></li>
            </ul>
           </div>
        </div>
    );
}

export default ProductCard;