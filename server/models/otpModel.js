import mongoose from "mongoose";

const otpSchema = mongoose.Schema({

    mobile:{
        type: String,
        required: true,
        unique: true
    },
    otp:{
        type: String,
        required: true
    },
    createdAt:{
        type: Date,
        default: Date.now,
        index: { expires: 300 }// otp expires after 5 mins
    }

}, { timestamps: true });

const Otp = mongoose.model("Otp", otpSchema);

export default Otp;