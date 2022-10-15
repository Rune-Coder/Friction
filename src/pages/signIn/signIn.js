import React, { useState, useEffect } from 'react';

import classes from './signIn.module.css';

function SignIn(props){
    const [email, setEmail] = useState(" ");
    const [errMsg, setErrMsg] = useState("ok");

    useEffect(() => {
        document.title = 'Online Shopping site for shoes in India | Friction';
    });

    function loginHandler(event){
        event.preventDefault();
        const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(email.match(mailformat)){
            setErrMsg("ok");
        }
        else
            setErrMsg("Please enter a valid email address");
    }
    function emailHandler(event){
        const no = event.target.value;
        setEmail(no);    
    }

    return(
        <div className={classes.login}>
            <form className={classes.loginForm} onSubmit = {loginHandler}>
                <p className={classes.head}><span  className={classes.headSpan}>Login</span> or <span  className={classes.headSpan}>Signup</span></p>
                <div className={classes.details}>
                    <input 
                        type= "text" 
                        placeholder=' ' 
                        required 
                        className={classes.textBox}
                        onBlur = {emailHandler}>
                    </input>
                    <label className={classes.formLabel}>
                       Email*
                    </label>
                    {errMsg !== "ok" && <p className={classes.errmsg}>{errMsg}</p>}
                </div>
                <div className={classes.details}>
                    <input 
                        type= "password" 
                        placeholder=' ' 
                        maxlength="16"
                        required 
                        className={classes.textBox}>
                    </input>
                    <label className={classes.formLabel}>
                       Password*
                    </label>
                </div>
                <p className={classes.failLogIn}>Forget Password?</p>
                <button type = "submit" value="Submit" className={classes.contd}>CONTINUE</button>
                <p className={classes.agree}> By continuing, I agree to the <span className={classes.bond}>Terms of Use</span> and&nbsp;
                <span className={classes.bond}>Privacy Policy</span></p>
                <p className={classes.failLogIn}>New to Friction? Create an account</p>
            </form>
        </div>
    );
}

export default SignIn;