import mongoose from "mongoose";
import jwt from "jsonwebtoken";

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

userSchema.methods.generateJWT = function(){
    const token = jwt.sign({
        _id: this.id,
        name: this.name,
        mobile: this.mobile,
        email: this.email,
        password: this.password,
        gender: this.gender,
        isAdmin: this.isAdmin
    }, process.env.JWT_SECRET_KEY)
}

const User = mongoose.model("User", userSchema);

export default User;