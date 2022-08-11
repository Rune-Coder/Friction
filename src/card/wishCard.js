import React from 'react';

import CloseIcon from '../icons/closeIcon';
import classes from './wishCard.module.css';

function WishCard(props) {
    return(
        <div className={classes.card}>
            <div className={classes.image}>
                image
           </div>
           <div className={classes.desc}>
                <p>Product Name</p>
                <p className={classes.price}>&#8377;sp&nbsp;
                    <span className={classes.mrp}>&#8377;mrp</span>&nbsp;
                    <span className={classes.discount}>(d% off)</span>
                </p>
                <button type='button' className={classes.bag}>MOVE TO BAG</button>
                <span className={classes.close}><CloseIcon /></span>
           </div>
        </div>
    );
}

export default WishCard;