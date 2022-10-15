import express from 'express';
import asyncHandler from 'express-async-handler';
import bcrypt from 'bcryptjs';
import User from '../models/userModel.js';


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
        console.log( email, password );
        if(!email || !password)
            return res.status(422).json({ error: 'Pls fill field' });
        try{
            const userExist = await User.findOne({ email: email });
            if(userExist && (await userExist.matchPassword(password))){
                return res.status(422).json({ 
                    _id: userExist._id,
                    name: userExist.name,
                    mobile: userExist.mobile,
                    email: userExist.email,
                    gender: userExist.gender,
                    isAdmin: userExist.isAdmin,

                });
            }
            else{
                res.status(201).json({ message: "Invalid email or password" });
            }
        }
        catch(error){
            console.log(error);
        }
    })
);




export default userRoute;

