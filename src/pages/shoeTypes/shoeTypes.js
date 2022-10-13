import React, { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';

import ProductCard from '../../card/productCard';
import loader from '../../image/sectionLoader.gif';
import classes from './shoeTypes.module.css';

function ShoeTypes(props){

    const {tname} = useParams();

    const [products, setProducts] = useState([]);

    const [gen, stype] = tname.split("-");

    useEffect(() => {
        document.title = 'Buy '+ gen.charAt(0).toUpperCase() + gen.slice(1) +' '+ stype.charAt(0).toUpperCase() + stype.slice(1) + ' Online in India | Friction';
    });

    function getData(){
        fetch(`/api/products/type/${tname}`, {mode: 'cors'})
        .then((response) => {
            return response.json();
        }).then((data) => {
            setProducts(data);
        });
    }

    useEffect(() =>{
        getData();
    }, []);

    console.log(products);

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
            <div className={classes.catalogue}>
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

export default ShoeTypes;