import express from 'express';
import asyncHandler from 'express-async-handler';
import bcrypt from 'bcryptjs';
import User from '../models/userModel.js';
import generateToken from '../util/generateToken.js';
import protect from '../middleware/auth.js';


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



export default userRoute;

