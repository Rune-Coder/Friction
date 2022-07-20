import React from 'react';
import StarIcon from '../icons/starIcon';
import classes from './productCard.module.css';

function ProductCard(props) {
    return(
        <div className={classes.card}>
           <div className={classes.image}>
            image
           </div>
           <div className={classes.desc}>
            {props.company}
            <p className={classes.pName}>{props.product}</p>
            <p className={classes.rating}>
                <span className={classes.star}>
                    <StarIcon />
                </span>
                <span className={classes.star}>
                    <StarIcon />
                </span>
                <span className={classes.star}>
                    <StarIcon />
                </span>
                <span className={classes.star}>
                    <StarIcon />
                </span>
                <span className={classes.star}>
                    <StarIcon />
                </span>{props.rating}</p>
            <ul className={classes.priceCart}>
                <li className={classes.price}>&#8377;{props.sp} <span className={classes.mrp}>&#8377;{props.mrp}</span> <span className={classes.discount}>({props.discount}% off)</span></li>
                <li>cart</li>
            </ul>
           </div>
        </div>
    );
}

export default ProductCard;