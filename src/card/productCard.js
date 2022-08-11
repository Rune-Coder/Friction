import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import StarRating from './starRating';
import HeartIcon from '../icons/heartIcon';
import classes from './productCard.module.css';

function ProductCard(props) {
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

    const [addWish, setAddWish] = useState(false);
    function wishHandler(event){
        if(addWish)
            setAddWish(false);
        else
            setAddWish(true);
        return;
    }
    return(
        <div className={classes.card}>
           <div className={classes.image} onClick = {routeChange}>
                <img src = {props.image} alt = "Sneakers"></img>
           </div>
           <div className={classes.desc}>
                {props.company}
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