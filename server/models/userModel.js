import mongoose from "mongoose";
import bcrypt from 'bcrypt';

const userSchema = mongoose.Schema({

    name:{
        type: String,
        required: true
    },
    mobile:{
        type: String,
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

//login
userSchema.methods.matchPassword = async function(enterPassword){
    return await bcrypt.compare(enterPassword, this.password);
};

const User = mongoose.model("User", userSchema);

export default User;