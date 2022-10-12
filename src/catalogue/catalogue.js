import React, { useState, useEffect } from 'react';
import classes from './catalogue.module.css';
import ProductCard from '../card/productCard';
import axios from 'axios';
import loader from '../image/sectionLoader.gif';

function Catalogue(props) {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function getData() {
          const {data} = await axios.get('/api/products');
          setProducts(data.products);
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
            </div>
        );
    }
    return(
        <div>
            <img src = {loader} alt = "Loading..."></img>
        </div>
    );
    
}

export default Catalogue;