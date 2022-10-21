import React from 'react';

import classes from './orderProductCard.module.css';

function OrderProductCard(props){
    return (
        <div className={classes.layout}>
            <div className={classes.img}>image</div>
            <div className={classes.details}>
                <div>Company</div>
                <div className={classes.subHead}>Product</div>
                <div className={classes.subHead}>Size:&nbsp;7&nbsp;|&nbsp;Qty:&nbsp;1</div>
                <p>&#8377;&nbsp;200</p>
            </div>
        </div>
    );
}

export default OrderProductCard;