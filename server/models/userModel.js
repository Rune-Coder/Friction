import mongoose from "mongoose";

const userSchema = mongoose.Schema({

    name:{
        type: String,
        required: true
    },
    mobile:{
        type: String,
        required: true,
        unique: true
    },
    email:{
        type: String,
        required: false,
        unique: true,
        default: "- not added -"
    },
    password:{
        type: String,
        required: true
    },
    gender:{
        type: String,
        required: true
    },
    isAdmin:{
        type: Boolean,
        required: true,
        default: false
    }

});

const User = mongoose.model("User", userSchema);

export default User;