import React, { useState } from 'react';

import classes from './registerForm.module.css';

function RegisterForm(props){

    const msg = {passWord: "ok", email: "ok"};

    const [showPw, setShowPw] = useState("Show");
    const [usePw, setUsePw] = useState(" ");
    const [useEmail, setUseEmail] = useState(" ");
    const [errMsg, setErrMsg] = useState(msg);

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

    function passwordHandler(event){
        const pw = event.target.value;
        setUsePw(pw);

        if(pw.length < 8)
            setErrMsg({ ...errMsg, passWord: "Minimum length must be 8"});
        else if(/[A-Z]/.test(pw) === false)
            setErrMsg({ ...errMsg, passWord: "Password must have atleast 1 uppercase character"});
        else if(/\d/.test(pw) === false)
            setErrMsg({ ...errMsg, passWord: "Password must have atleast 1 numeric character"});
        else if(/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(pw) === false)
            setErrMsg({ ...errMsg, passWord: "Password must have atleast 1 special character"});
        else
            setErrMsg({ ...errMsg, passWord: "ok"});
    }

    function emailHandler(event){
        const eml = event.target.value;
        if(eml.length === 0)
            return;
        setUseEmail(eml);

        if(eml.indexOf('@') === -1 || !(/[a-zA-Z]/).test(eml.charAt(0)))
            setErrMsg({ ...errMsg, email: "Enter a valid email"});
        else
            setErrMsg({ ...errMsg, email: "ok"});
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
                    className={classes.textBox}
                    onBlur = {passwordHandler}>
                </input>
                <span className={classes.show} onClick={showPass}>
                    {showPw}
                </span>
                <label className={classes.formLabel}>
                    Create Password*
                </label>
                {errMsg.passWord !== "ok" && <p className={classes.errmsg}>{errMsg.passWord}</p>}
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
                    className={classes.textBox}
                    required
                    onBlur = {emailHandler}>
                </input>
                <label className={classes.formLabel}>
                    Email*
                </label>
                {errMsg.email !== "ok" && <p className={classes.errmsg}>{errMsg.email}</p>}
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