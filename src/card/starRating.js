import React from 'react';
import StarIcon from '../icons/starIcon';
import classes from './starRating.module.css';

function StarRating(props) {
    const fullStar = props.stars;
    return(
        <div className={classes.rating}>
            <span className={`${classes.star} ${fullStar >= 1 ? classes.starFill: ''}`}>
                <StarIcon />
            </span>
            <span className={`${classes.star} ${fullStar >= 2 ? classes.starFill: ''}`}>
                <StarIcon />
            </span>
            <span className={`${classes.star} ${fullStar >= 3 ? classes.starFill: ''}`}>
                <StarIcon />
            </span>
            <span className={`${classes.star} ${fullStar >= 4 ? classes.starFill: ''}`}>
                <StarIcon />
            </span>
            <span className={`${classes.star} ${fullStar === 5 ? classes.starFill: ''}`}>
                <StarIcon />
            </span>
        </div>
    );
}

export default StarRating;