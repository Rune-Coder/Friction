import React, { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cartStore';
import { wishActions } from '../../store/wishStore';

import StarRating from '../../card/starRating';
import CartIcon from '../../icons/cartIcon';
import HeartIcon from '../../icons/heartIcon';
import ToastCard from '../../card/toastCard';
import classes from './productView.module.css';
import loader from '../../image/sectionLoader.gif';

function ProductView(props) {
    
    const {prdct, pid} = useParams();

    const [com, pname] = prdct.split("-");

    const [size, setSize] = useState("0");
    const [showPara, setShowPara] = useState(false);
    const [showToast, setShowToast] = useState("false");

    useEffect(() => {
        document.title = 'Buy '+ com +' '+ pname;
    });
    
    const [products, setProducts] = useState({});
    
    const dispatch = useDispatch();

    function getData(){
        fetch(`/api/products/${pid}`, {mode: 'cors'})
        .then((response) => {
            return response.json();
        }).then((data) => {
            setProducts(data);
        });
    }

    useEffect(() =>{
        getData();
    }, []);

    if(products){

    function sizeHandler(event){
        setSize(event.target.innerText);
        return;
    }

    function addWish(event){
        if(showToast !== "false")
            return;

        dispatch(wishActions.addItem({
            id: products._id,
            image: products.image,
            company: products.company,
            product: products.product,
            rating: products.rating,
            sp: products.sp,
            mrp: products.mrp,
            discount: products.discount,
        }));

        setShowToast("wishlist");
        setTimeout(function(){ setShowToast("false"); }, 3000);

        return;
    }

    function addItem(event){
        if(showToast !== "false")
            return;
        if(size === "0"){
            setShowPara(true);
            return;
        }
        setShowPara(false);

        dispatch(cartActions.addItem({
            id: products._id,
            image: products.image,
            company: products.company,
            product: products.product,
            rating: products.rating,
            sp: products.sp,
            mrp: products.mrp,
            discount: products.discount,
            quantity: 1,
            sz: size,
            delfee: 0,
        }));//dispatching value to functions

        setShowToast("bag");
        setTimeout(function(){ setShowToast("false"); }, 3000);

        return;
    }
    function remToast(rem){
        setShowToast("false");
        return;
    } 
    
    return(
            <div className={classes.view}>
                {showToast !== "false" && <div className={classes.toast}> <ToastCard close = {remToast} value = {"Item is added to "+ showToast} /> </div>}

                <div className={classes.image}><img src = {products.image} alt = "Sneakers"></img></div>

                <div className={classes.details}>
                    <p className={classes.company}>{products.company}</p>
                    <p className={classes.product}>{products.product}</p>
                    <p className={classes.rating}><StarRating stars={products.rating}/>{products.rating}</p>
                    <p className={classes.price}>&#8377;{products.sp}&nbsp;&nbsp;
                        
                        <span className={classes.mrp}>&#8377;{products.mrp}</span>
                        <span className={classes.discount}>&nbsp;&nbsp;({products.discount}% off)</span>
                    
                    </p>
                    <p className={classes.tax}>Inclusive of all taxes</p>
                    <p>SELECT SIZE (UK)</p>

                    <ul className={classes.size}>
                        <li><button className={size === "6" ? classes.sizeActive : ''} onClick={sizeHandler}>6</button></li>
                        <li><button className={size === "7" ? classes.sizeActive : ''} onClick={sizeHandler}>7</button></li>
                        <li><button className={size === "8" ? classes.sizeActive : ''} onClick={sizeHandler}>8</button></li>
                        <li><button className={size === "9" ? classes.sizeActive : ''} onClick={sizeHandler}>9</button></li>
                        <li><button className={size === "10" ? classes.sizeActive : ''} onClick={sizeHandler}>10</button></li>
                    </ul>

                    {showPara && <p className={classes.sizeWarning}>Please select a size</p>}
                    
                    <button className={classes.bag} onClick={addItem}>
                        <span className={classes.cartIcon}><CartIcon /></span>
                        &nbsp;&nbsp;&nbsp;
                        ADD TO BAG
                    </button>&nbsp;
                    <button className={classes.wish} onClick={addWish}>
                        <span className={classes.heartIcon}><HeartIcon /></span>
                        &nbsp;&nbsp;&nbsp;
                        WISHLIST
                    </button>
                
                </div>
            </div>
    );
    }
    return(
        <div className={classes.loading}>
             <img src = {loader} alt = "Loading..." className={classes.loaderImg}></img>
        </div>
    );
}

export default ProductView;