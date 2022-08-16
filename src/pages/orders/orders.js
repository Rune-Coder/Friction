import React from 'react';

import OrdersEmpty from './ordersEmpty';
import classes from './orders.module.css';

function Orders(props){
    return(
        <div>
            <OrdersEmpty />
        </div>
    );
}

export default Orders;