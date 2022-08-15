import React from 'react';

import classes from './signIn.module.css';

function SignIn(props){
    return(
        <div className={classes.login}>
            <form className={classes.loginForm}>
                <p className={classes.head}>Sign In</p>
                <div className={classes.details}>
                    <input 
                        type= "text" 
                        placeholder=' ' 
                        maxLength= "10"
                        required 
                        className={classes.textBox}>
                    </input>
                    <label className={classes.formLabel}>
                        Enter mobile number
                    </label>
                </div>
                <button type = "button" className={classes.contd}>CONTINUE</button>
                <p>By continuing, you agree to our Terms & Conditions and<br></br>Privacy Policy</p>
            </form>
        </div>
    );
}

export default SignIn;