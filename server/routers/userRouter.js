import express from 'express';
import asyncHandler from 'express-async-handler';
import bcrypt from 'bcryptjs';
import User from '../models/userModel.js';
import generateToken from '../util/generateToken.js';
import protect from '../middleware/auth.js';
import UserHistory from '../models/userHistoryModel.js';


const userRoute = express.Router();

// signup
userRoute.post("/register", 
    asyncHandler(async (req, res)=>{
        const {name, mobile, email, password, gender} = req.body;
        if(!name || !email || !mobile || !password || !gender)
            return res.status(422).json({ error: 'Pls fill field' });
        try{
            const userExist = await User.findOne({ email: email });

            if(userExist)
                return res.status(422).json({ error: "Email already registered"});
            else{
                const user = new User({ name, mobile, email, password: bcrypt.hashSync(password, 10), gender });
                await user.save();
                res.status(201).json({ message: "User registration succcessful " });
            }
        }
        catch(error){
            console.log(error);
        }
    })
);

// login
userRoute.post("/login", 
    asyncHandler(async (req, res)=>{
        const { email, password } = req.body;
        if(!email || !password)
            return res.status(422).json({ error: 'Pls fill field' });
        try{
            const userExist = await User.findOne({ email: email });
            if(userExist && (await userExist.matchPassword(password))){
                return res.status(201).json({ 
                    _id: userExist._id,
                    name: userExist.name,
                    mobile: userExist.mobile,
                    email: userExist.email,
                    gender: userExist.gender,
                    isAdmin: userExist.isAdmin,
                    token: generateToken(userExist._id),
                });
            }
            else{
                res.status(422).json({ message: "Invalid email or password" });
            }
        }
        catch(error){
            console.log(error);
        }
    })
);

// profile
userRoute.get("/profile", protect,
    asyncHandler(async (req, res)=>{
        const user = await User.findById(req.user._id);

        if(user){
            return res.status(201).json({ 
                _id: user._id,
                name: user.name,
                mobile: user.mobile,
                email: user.email,
                gender: user.gender,
                isAdmin: user.isAdmin,
            });
        }
        else
            res.status(404).json({ message: "User not found" });
    })
);

// post user history
userRoute.post("/history-create",
    asyncHandler(async (req, res)=>{

        const { email, cart, bill, wish, address } = req.body;
        const user = await UserHistory.findOne({ email: email });

        if(user){
            await UserHistory.updateOne(
                { email },
                {
                    $set: { cart, bill, wish, address}
                }
            );

            res.status(202).json({ message: "User history updated" });
        }
        else{
            const newUserHistory = new UserHistory({ email, cart, bill, wish, address });
            await newUserHistory.save();
            res.status(201).json({ message: "User history created" });
        }
    })
);

// get user history
userRoute.post("/history-get",
    asyncHandler(async (req, res)=>{

        const { email } = req.body;
        const user = await UserHistory.findOne({ email: email });

        if(user){
            return res.status(202).json({ 
                email: user.email,
                cart: user.cart,
                bill: user.bill,
                wish: user.wish,
                address: user.address
            });
        }
        else{
            res.status(422).json({ message: "No such user exist" });
        }
    })
);


export default userRoute;

