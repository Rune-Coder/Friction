import React from 'react';
import ShoeMenu from '../shoeMenu/shoeMenu';

const shoeList = [
    {
        id: 's1',
        shoe1: 'boots',
        shoe2: 'sneakers'
    },
    {
        id: 's2',
        shoe1: 'sports',
        shoe2: 'walk'
    }
];
function TypeList(props) {
    const productList = shoeList.map((shoe) => (
        <ShoeMenu 
            key = {shoe.id} 
            shoe1 = {shoe.shoe1}
            shoe2 = {shoe.shoe2}
        />
    ));
    return(
        <li className={classes.features}>
           {productList}
        </li>
    );
}

export default TypeList;