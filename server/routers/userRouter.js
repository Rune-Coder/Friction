import express, { Router } from 'express';
import asyncHandler from 'express-async-handler';
import { signup, verifyOtp } from '../controller/userController.js';
import User from '../models/userModel.js';


const userRoute = express.Router();

// //login
// userRoute.get("/", 
//     asyncHandler(async (req, res)=>{
//         const mobile = req.body;
//         const user = await User.findOne({ mobile });     
//     })
// );

userRoute.route('/signup').post(signup);

userRoute.route('/signup/verify').post(verifyOtp);

export default userRoute;

