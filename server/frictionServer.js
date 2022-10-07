import express from "express";
import products from './frictionData/products.js';
import dotenv from "dotenv";

dotenv.config();
const app = express();

//load products from server
app.get("/api/products", (req, res)=> {
    res.json(products);
});

//single product from server
app.get("/api/products/:id", (req, res)=> {
    const product = products.find((p) => p.id === req.params.id);
    res.json(product);
});

app.get("/", (req, res)=> {
    res.send("API is running...");
});

const PORT = process.env.PORT || 1000;

app.listen(PORT, console.log("server running in port "+ PORT));