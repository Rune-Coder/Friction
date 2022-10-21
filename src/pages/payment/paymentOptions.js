import React, { useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import BadgeCheckIcon from '../../icons/badgeCheckIcon';
import classes from './paymentOptions.module.css';
import { addressActions } from '../../store/addressStore';

function PaymentOptions(props){
    const bill = localStorage.getItem("billStore") ? JSON.parse(localStorage.getItem("billStore")) : [{amount: 0}];
    const products = localStorage.getItem("products") ? JSON.parse(localStorage.getItem("products")) : [];
    const address = useSelector((state) => state.address.currAddress);
    const userSub = useSelector((state) => state.login.userData);
    let navigate = useNavigate();
    const dispatch = useDispatch();

    const [orders, setOrders] = useState([]);
    const [ops, setOps] = useState(" ");

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

    //post orders
    async function postOrders(email, orders){

        const cart = [];
        const bill = [];
        const res = await fetch("/api/user/history-create", {
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email, cart, bill, orders })
        });
    
        await res.json();

    }

    function toOrders(){
        navigate(`/orders`, { replace: true });
    }

    function pay(event){

        if(ops === " ")
            return;
        else if(ops === "cash"){

            var today = new Date();
            var dd = String(today.getDate()).padStart(2, '0');
            var mm = String(today.getMonth() + 1).padStart(2, '0');
            var yyyy = today.getFullYear();

            today = dd + '/' + mm + '/' + yyyy;

            var currOrder = orders.slice();
            currOrder.push({
                order_id: "",
                status: "processing",
                bill: bill,
                products: products,
                payment: "cash",
                address: address,
                date: today
            });

            postOrders(userSub.email, currOrder);

            dispatch(addressActions.remAddress());

            toOrders();


        }
    }

    return(
        <div className={classes.paymentCard}>
            <div className={classes.summary}>
                Order Total &#8377; {bill[0].amount}
            </div>
            PAYMENT OPTIONS
            <ul className={classes.paymentOps}>
                <li onClick = {() => setOps("cash")}>
                    <div className={classes.selectOps}>Cash On Delivery
                    {ops === "cash" && <span className={classes.check}><BadgeCheckIcon /></span>}</div>
                </li>
                <li onClick = {() => setOps("online")}>  
                    <div className={classes.selectOps}>Pay Now
                    {ops === "online" && <span className={classes.check}><BadgeCheckIcon /></span>}</div>
                    <div className={classes.subHead}>Debit Card, Credit Card, Net Banking, UPI</div>
                </li>
                <li><button onClick = {pay} className={classes.continue}>CONTINUE</button></li>
            </ul>
        </div>
    );
}

export default PaymentOptions;