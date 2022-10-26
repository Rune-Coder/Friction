import React, { useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';
import BadgeCheckIcon from '../../icons/badgeCheckIcon';
import { useSelector, useDispatch } from 'react-redux';
import { addressActions } from '../../store/addressStore';
import classes from './paymentSuccess.module.css';

function PaymentSuccess(props){

    useEffect(() => {
        document.title = 'Online Shopping site for shoes in India | Friction';
    });

    
    const dispatch = useDispatch();

    let navigate = useNavigate();
    const login = useSelector((state) => state.login.loggedin);
    const address = useSelector((state) => state.address.currAddress);

    if(!login || address === {})
        navigate(`/`, { replace: true });
    
    const userSub = useSelector((state) => state.login.userData);

    const [orders, setOrders] = useState([]);

    useEffect(() =>{

        const bill = localStorage.getItem("billStore") ? JSON.parse(localStorage.getItem("billStore")) : [{amount: 0}];
        const products = localStorage.getItem("products") ? JSON.parse(localStorage.getItem("products")) : [];

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
            payment: "Online",
            address: address,
            date: today
        });

        postOrders(userSub.email, currOrder);

        dispatch(addressActions.remAddress());

        setTimeout(function(){ 
            navigate(`/orders`, { replace: true });
        }, 2000);

    }, [userSub.email, address, dispatch, navigate, orders]);


    return(
        <div className={classes.layout}>
            <div><span className={classes.badge}><BadgeCheckIcon /></span></div>
            <p>Order Successfull</p>
        </div>
    );
}

export default PaymentSuccess;