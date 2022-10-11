import mongoose from "mongoose";

const productSchema = mongoose.Schema({

    image:{
        type: String,
        required: true
    },
    company:{
        type: String,
        required: true
    },
    product:{
        type: String,
        required: true
    },
    rating:{
        type: Number,
        required: true
    },
    sp:{
        type: Number,
        required: true
    },
    mrp:{
        type: Number,
        required: true
    },
    discount:{
        type: Number,
        required: true                                                                                                    
    }
});

const Product = mongoose.model("Product", productSchema);

export default Product;