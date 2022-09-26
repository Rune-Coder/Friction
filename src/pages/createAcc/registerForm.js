import React, { useState } from 'react';

import classes from './registerForm.module.css';

function RegisterForm(props){

    const [showPw, setShowPw] = useState("Show");

    function showPass(event){
        const pasShow = document.getElementById("password");
        if(showPw === "Show"){
            setShowPw("Hide");
            pasShow.type = "text";
        }
        else{
            setShowPw("Show");
            pasShow.type = "password";
        }
    }

    function accSave(event){  
        event.preventDefault();
    }

    return(
        <form onSubmit={accSave}>
            <div className={classes.details}>
                <input 
                    type= "password" 
                    placeholder=' '
                    maxlength="16"  
                    id= "password"
                    required 
                    className={classes.textBox}>
                </input>
                <div className={classes.show} onClick={showPass}>
                    {showPw}
                </div>
                <label className={classes.formLabel}>
                    Create Password*
                </label>
            </div>
            <div className={classes.details}>
                <input 
                    type= "text" 
                    placeholder=' '  
                    required 
                    className={classes.textBox}>
                </input>
                <label className={classes.formLabel}>
                    Full Name*
                </label>
            </div>
            <div className={classes.details}>
                <input 
                    type= "text" 
                    placeholder=' '  
                    className={classes.textBox}>
                </input>
                <label className={classes.formLabel}>
                    Email (optional)
                </label>
            </div>
            <div className={classes.gen}>
                <p>Select Gender:&nbsp;</p>
                <input type="radio" id= "gen1" name="gender" value="F">
                </input>
                <label for="gen1">Female</label>
                <input type="radio" id= "gen2" name="gender" value="M">
                </input>
                <label for="gen2">Male</label>
            </div>

            <button type= "submit" value="Submit" className={classes.save}>CREATE ACCOUNT</button>
        </form>
    );
}

export default RegisterForm;