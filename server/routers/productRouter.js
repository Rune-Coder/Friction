import express from 'express';
import asyncHandler from 'express-async-handler';
import Product from '../models/productModel.js';

const productRoute = express.Router();

//get all product
productRoute.get("/", 
    asyncHandler(async (req, res)=>{
        const products = await Product.find({});
        res.send({products});
    })
);

//get single product
productRoute.get("/:id", 
    asyncHandler(async (req, res)=>{
        const product = await Product.findById(req.params.id);
        if (product) {
            res.send(product);
        } else {
            res.status(404);
            throw new Error("Product not found");
        }
    })
);

export default productRoute;