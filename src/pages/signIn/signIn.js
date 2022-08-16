import React, { useState } from 'react';

import classes from './signIn.module.css';

function SignIn(props){
    const [mob, setMob] = useState(" ");
    const [errMsg, setErrMsg] = useState("ok");

    function loginHandler(event){
        event.preventDefault();

        if(mob.length < 10)
            setErrMsg("Minimum length is 10");
        else if(/^\d+$/.test(mob) === false)
            setErrMsg("Please enter a valid 10 digit mobile number");
        else if(mob.charAt(0) < 6)
            setErrMsg("Please enter a valid 10 digit mobile number");
        else
            setErrMsg("ok");
    }
    function mobHandler(event){
        const no = event.target.value;
        setMob(no);    
    }

    return(
        <div className={classes.login}>
            <form className={classes.loginForm} onSubmit = {loginHandler}>
                <p className={classes.head}><span  className={classes.headSpan}>Login</span> or <span  className={classes.headSpan}>Signup</span></p>
                <div className={classes.details}>
                    <input 
                        type= "text" 
                        placeholder=' ' 
                        maxLength= "10"
                        required 
                        className={classes.textBox}
                        onChange = {mobHandler}>
                    </input>
                    <label className={classes.cntryCode}>
                       +91 |
                    </label>
                    <label className={classes.formLabel}>
                       Mobile Number*
                    </label>
                    {errMsg !== "ok" && <p className={classes.errmsg}>{errMsg}</p>}
                </div>
                <button type = "submit" value="Submit" className={classes.contd}>CONTINUE</button>
                <p className={classes.agree}> By continuing, I agree to the <span className={classes.bond}>Terms of Use</span> and&nbsp;
                <span className={classes.bond}>Privacy Policy</span></p>
            </form>
        </div>
    );
}

export default SignIn;