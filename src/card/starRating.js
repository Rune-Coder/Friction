import React from 'react';
import StarIcon from '../icons/starIcon';
import classes from './starRating.module.css';

function StarRating(props) {
    return(
        <div className={classes.rating}>
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
            </span>
        </div>
    );
}

export default StarRating;