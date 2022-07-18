import React from 'react';
import classes from './catalogue.module.css';
import ProductCard from '../card/productCard';

function Catalogue(props) {
    const productDetails = [
        {
            id: 'p1',
            company: 'Adidas',
            product: 'Sneakers',
            rating: 4.5,
            sp: 249,
            mrp: 300,
            discount: 17,
        },
        {
            id: 'p2',
            company: 'Nike',
            product: 'Boots',
            rating: 4.6,
            sp: 200,
            mrp: 400,
            discount: 50,
        }
    ];
    return(
        <div className={classes.features}>
           <ProductCard
           company = {productDetails[0].company}
           product = {productDetails[0].product}
           rating = {productDetails[0].rating}
           sp = {productDetails[0].sp}
           mrp = {productDetails[0].mrp}
           discount = {productDetails[0].discount}
           className = {classes.card}
           />
           <ProductCard
           company = {productDetails[1].company}
           product = {productDetails[1].product}
           rating = {productDetails[1].rating}
           sp = {productDetails[1].sp}
           mrp = {productDetails[1].mrp}
           discount = {productDetails[1].discount}
           className = {classes.card}
           />
        </div>
    );
}

export default Catalogue;