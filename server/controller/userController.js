import bcrypt from 'bcrypt';
import _ from 'lodash';
import axios from 'axios';
import otpGenerator from 'otp-generator';

import User from '../models/userModel.js';
import Otp from '../models/otpModel.js';

const signup = async (req, res) => {
    const {number} = req.body;
    console.log(number);
    const user =  await User.findOne({ number });
    if(user)
        return res.status(400).send("User already registered");

    const OTP = otpGenerator.generate(6, {
        digits: true, alphabets: false, upperCase: false, specialChars: false
    });
    console.log(OTP);

    const otp = new Otp({ number: number, otp: OTP });
    const salt = await bcrypt.genSalt(10);
    otp.otp = await bcrypt.hash(otp.otp, salt);
    const result = await otp.save();
    return res.status(200).send("Otp sent successfully");

}

const verifyOtp = async (req, res) => {
    
}

export { signup, verifyOtp };