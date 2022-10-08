import express from 'express';
import User from './models/userModel.js';
import users from './frictionData/users.js';

const importData = express.Router();

importData.post("/user", async (req, res)=>{
    await User.deleteMany({});
    const importUser = await User.insertMany(users);
    res.send({importUser});
});

export default importData;