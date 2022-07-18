import React from 'react';
import classes from './offerHeader.module.css';

function OfferHeader() {
    return (
      <div className={classes.offer}>
        <div className={classes.headTitle}>
          Trade-In-offer
          <h2>Super Value Deals</h2>
          <h2 className = {classes.head2}>Best Quality Shopping</h2>
          <p className = {classes.head3}>Save more with coupons upto 70% off</p>
          <button type= "button" className = {classes.headBtn}>Shop Now</button>
        </div>
        <div className={classes.headImg}>djgj</div>
      </div>
    );
  }
  
  export default OfferHeader;
  