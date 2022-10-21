import React from 'react';
import OrderList from '../pages/orders/orderList';

import classes from './ordersCard.module.css';

function OrdersCard(props){
    return(
        <div className={classes.layout}>
            <div className={classes.head}>
                <ul className={classes.orderDetails}>
                    <li>
                        <div>ORDER PLACED</div>
                        <div>{props.date}</div>
                    </li>
                    <li>
                        <div>TOTAL</div>
                        <div>&#8377;{props.bill[0].amount}</div>
                    </li>
                    <li>
                        <div>ORDER ID</div>
                        <div>#{props.id}</div>
                    </li>
                </ul>
            </div>
            <div className={classes.orderBody}>
                <ul className={classes.cartDetails}>
                    <OrderList />
                    <OrderList />
                </ul>
            </div>
        </div>
        
    );
}

export default OrdersCard;