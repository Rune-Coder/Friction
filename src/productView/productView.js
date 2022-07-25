import React from 'react';
import classes from './productView.module.css';

function ProductView(props) {
    return(
        <div className={classes.view}>
            <div className={classes.image}>image</div>
            <div className={classes.details}>
                <p className={classes.company}>Company Name</p>
                <p className={classes.product}>Product Name</p>
                <p>Rating</p>
                <p className={classes.price}>&#8377;x&nbsp;&nbsp;
                    <span className={classes.mrp}>&#8377;y</span>
                    <span className={classes.discount}>&nbsp;&nbsp;(z% off)</span>
                </p>
                <p className={classes.tax}>Inclusive of all taxes</p>
                <p>SELECT SIZE (UK)</p>
                <ul className={classes.size}>
                    <li><button>6</button></li>
                    <li><button>7</button></li>
                    <li><button>8</button></li>
                    <li><button>9</button></li>
                    <li><button>10</button></li>
                </ul>
                <button className={classes.bag}>ADD TO BAG</button>&nbsp;
                <button className={classes.wish}>WISHLIST</button>
            </div>
        </div>
    );
}

export default ProductView;