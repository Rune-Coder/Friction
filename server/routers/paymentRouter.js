import express from 'express';
import {instance} from '../util/paymentInstance.js';

const paymentRoute = express.Router();

paymentRoute.post("/checkout",
    async (req, res)=>{
         
        const options = {
            amount: 50000,
            currency: "INR",
            receipt: "order_rcptid_11"
        };
        const order = await instance.orders.create(options);

        console.log(order);
        res.status(201).json({ message: "oreder created" });
    }
);

export default paymentRoute;