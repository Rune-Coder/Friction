import React, { useState, useEffect } from 'react';

import { useParams, useNavigate } from 'react-router-dom';

import ProductCard from '../../card/productCard';
import preloader from '../../image/sectionLoader.gif';
import rack from '../../image/shoe-rack.jpg';
import classes from './search.module.css';

function Search(props){
    const {prdct} = useParams();

    const [products, setProducts] = useState([]);

    const [loader, setLoader] = useState(false);

    let navigate = useNavigate();

    useEffect(() => {
        document.title = 'Buy '+ prdct + ' Online in India | Friction';
    });

    function getData(){
        setLoader(true);
        fetch(`/api/products/category/${prdct}`, {mode: 'cors'})
        .then((response) => {
            return response.json();
        }).then((data) => {
            setProducts(data);
            setLoader(false);
        });
    }

    useEffect(() =>{
        getData();
    }, []);

    if(products && products.length > 0){
        const productList = products.map((shoe) => (
            <ProductCard 
                key = {shoe._id} 
                id = {shoe._id}
                image = {shoe.image}
                company = {shoe.company} 
                product = {shoe.product} 
                rating = {shoe.rating} 
                sp = {shoe.sp} 
                mrp = {shoe.mrp} 
                discount = {shoe.discount}
            />
        ));
        return(
            <div className={classes.catalogue}>
                {productList}
                {loader && <img src = {preloader} alt = "Loading..."></img>}
            </div>
        );
    }
    else{
        
        return(
            <div className={classes.empty}>
                <img src = {rack} alt = "Loading..."></img>
                <p className={classes.head}>We couldn't find any matches!</p>
                <p>Please check the spelling or try searching something else</p>
            </div>
        );
    }
}

export default Search;