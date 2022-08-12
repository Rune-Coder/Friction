import React, { Fragment, useState } from 'react';

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { wishActions } from '../../store/wishStore';

import WishListEmpty from './wishListEmpty';
import WishCard from '../../card/wishCard';
import ToastCard from '../../card/toastCard';
import classes from './wishList.module.css';

function WishList(props) {
    const [showToast, setShowToast] = useState("false");
    const dispatch = useDispatch();

    const itemList = useSelector((state) => state.wish.items);
    const items = itemList.map((shoe) => (
        <WishCard 
            key = {shoe.id} 
            id = {shoe.id} 
            image = {shoe.image} 
            company = {shoe.company} 
            product = {shoe.product} 
            rating = {shoe.rating} 
            sp = {shoe.sp} 
            mrp = {shoe.mrp} 
            discount = {shoe.discount}
        />
    ));

    const itemLen = useSelector((state) => state.wish.len);
    const itemRem = useSelector((state) => state.wish.rem);

    if(itemRem){
        setShowToast("wishlist");
        setTimeout(function(){ setShowToast("false"); }, 3000);

        dispatch(wishActions.remAlert());
    }
    function remToast(rem){
        setShowToast("false");
        dispatch(wishActions.remAlert());
        return;
    } 

    return(
        <Fragment>
            {showToast !== "false" && <div className={classes.toast}> <ToastCard change={"-"} close = {remToast} value = {showToast} /> </div>}
            
            {itemLen === 0 && <WishListEmpty />}
            {itemLen !== 0 && <div> 
                <p className={classes.head}><span>My Wishlist</span>: {itemLen} items</p>
                <div className={classes.wishCatalogue}>  
                    {items}
                </div>
            </div>}
            
        </Fragment>
    );
}

export default WishList;