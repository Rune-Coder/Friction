import React from 'react';

import CheckoutMenu from '../cart/checkoutMenu';
import classes from './address.module.css';

function Address(props){
    return(
        <div>
            <div>
                <CheckoutMenu value = "add" />
            </div>
        </div>
    );
}

export default Address;