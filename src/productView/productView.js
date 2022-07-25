import React from 'react';
import classes from './productView.module.css';

function ProductView(props) {
    return(
        <div className={classes.view}>
            <div className={classes.image}>image</div>
            <div className={classes.details}>
                <p>Company Name</p>
                <p>Product Name</p>
                <p>Rating</p>
                <p>&#8377;x &#8377;y (z% off)</p>
                <p>Inclusive of all taxes</p>
                <p>SELECT SIZE (UK)</p>
                <button>ADD TO BAG</button>
                <button>WISHLIST</button>
            </div>
        </div>
    );
}

export default ProductView;