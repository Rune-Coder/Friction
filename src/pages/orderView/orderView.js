import React, {useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';

import { useSelector } from 'react-redux';

import OrderProductCard from '../../card/orderProductCard';

import classes from './orderView.module.css';

function OrderView(props){
    const {oid} = useParams();
    const userSub = useSelector((state) => state.login.userData);

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        document.title = 'Order Details';
    });

    useEffect(() =>{

        //get orders data mongodb
        async function getOrders(email){

            const res = await fetch("/api/user/history-get", {
                method: "POST",
                headers:{
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email })
            });
        
            const data = await res.json();
                
            if(res.ok && data.orders)
                setOrders(data.orders);

        }
        getOrders(userSub.email);

    }, [userSub.email]);

    const currOrder = orders.find(item => item.order_id === oid);
    console.log(currOrder);
    const [dd, mm, yyyy] = currOrder.date.split("/");
    const month = ["", "Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

    return(
        <div className={classes.layout}>
            <div>
                <p><span className={classes.head}>Placed On:</span>&nbsp;&nbsp;{dd}&nbsp;{month[Number(mm)]}&nbsp;{yyyy}</p>
                <p><span className={classes.head}>Order No:</span>&nbsp;&nbsp;{oid}</p>
                <p><span className={classes.head}>Total Amount:</span>&nbsp;&#8377;&nbsp;{currOrder.bill[0].amount}</p>
            </div>
            <div>
                <p className={classes.head}>Contact Details</p>
                <p>{currOrder.address.mob}</p>
            </div>
            <div>
                <p className={classes.head}>Shipping Address</p>
                <p>{currOrder.address.house},&nbsp;&nbsp;{currOrder.address.town}</p>
                <p>{currOrder.address.city},&nbsp;&nbsp;{currOrder.address.state}&nbsp;-&nbsp;{currOrder.address.pin}</p>
            </div>
            <div>
                <p className={classes.head}>Payment Method</p>
                <p>{currOrder.payment}</p>
            </div>
            <OrderProductCard />
        </div>
    );
}

export default OrderView;