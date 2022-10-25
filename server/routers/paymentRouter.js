import express from 'express';
import asyncHandler from 'express-async-handler';
import instance from '../util/paymentInstance.js';

const paymentRoute = express.Router();

paymentRoute.route("/checkout",
    asyncHandler(async (req, res)=>{
         
        const options = {
            amount: 50000,
            currency: "INR",
            receipt: "order_rcptid_11"
        };
        const order = await instance.orders.create(options);

        console.log(order);
    })
);

export default paymentRoute;