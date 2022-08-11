import React from 'react';

import WishCard from '../../card/wishCard';
import classes from './wishList.module.css';

function WishList(props) {
    return(
        <div className={classes.wishCatalogue}>
            <WishCard />
        </div>
    );
}

export default WishList;