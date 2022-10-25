import React, { useEffect } from 'react';

import BadgeCheckIcon from '../../icons/badgeCheckIcon';
import classes from './paymentSuccess.module.css';

function PaymentSuccess(props){

    useEffect(() => {
        document.title = 'Online Shopping site for shoes in India | Friction';
    });
    

    return(
        <div className={classes.layout}>
            <div><span className={classes.badge}><BadgeCheckIcon /></span></div>
            <p>Order Successfull</p>
        </div>
    );
}

export default PaymentSuccess;