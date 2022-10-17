import React, { useState, useEffect } from 'react';
import classes from './catalogue.module.css';
import ProductCard from '../card/productCard';
import axios from 'axios';
import preloader from '../image/sectionLoader.gif';

function Catalogue(props) {

    const [products, setProducts] = useState([]);
    const [loader, setLoader] = useState(false);


    useEffect(() => {
        async function getData() {
          setLoader(true);  
          const {data} = await axios.get('/api/products');
          setProducts(data.products);
          setLoader(false);
        }
        getData();
    }, []);

    if(products){
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
            <div className={classes.features}>
            {productList}
            {loader && <img src = {preloader} alt = "Loading..."></img>}
            </div>
        );
    }
    return(
        <div>
            <img src = {preloader} alt = "Loading..."></img>
        </div>
    );
    
}

export default Catalogue;