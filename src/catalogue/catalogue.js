import React from 'react';
import classes from './catalogue.module.css';
import productImage from '../image/product_p1.png';
import ProductCard from '../card/productCard';

const productDetails = [
    {
        id: 'p1',
        image: productImage,
        company: 'Adidas',
        product: 'Sneakers',
        rating: 4.5,
        sp: 249,
        mrp: 300,
        discount: 17,
    },
    {
        id: 'p2',
        image: productImage,
        company: 'Nike',
        product: 'Boots',
        rating: 4.7,
        sp: 200,
        mrp: 400,
        discount: 50,
    }
];
function Catalogue(props) {
    const productList = productDetails.map((shoe) => (
        <ProductCard 
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
    return(
        <div className={classes.features}>
           {productList}
        </div>
    );
}

export default Catalogue;