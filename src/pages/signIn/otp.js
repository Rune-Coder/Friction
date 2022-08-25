import React from 'react';

import classes from './otp.module.css';

function Otp(props){

    function validateNumber(evt) {
        evt = (evt) ? evt : window.event;
        var charCode = (evt.which) ? evt.which : evt.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            return false;
        }
        return true;
    }
    return(
        <div>
            <form>
                <p>Enter OTP</p>
                <div className={classes.otpDetails}>
                    <input 
                        type= "text" 
                        maxLength= "1"
                        required 
                        className={classes.textBox}
                        onkeypress={validateNumber}
                        >
                    </input>
                    <input 
                        type= "text" 
                        maxLength= "1"
                        required 
                        className={classes.textBox}
                        >
                    </input>
                    <input 
                        type= "text" 
                        maxLength= "1"
                        required 
                        className={classes.textBox}
                        >
                    </input>
                    <input 
                        type= "text" 
                        maxLength= "1"
                        required 
                        className={classes.textBox}
                        >
                    </input>
                    <input 
                        type= "text" 
                        maxLength= "1"
                        required 
                        className={classes.textBox}
                        >
                    </input>
                    <input 
                        type= "text" 
                        maxLength= "1"
                        required 
                        className={classes.textBox}
                        >
                    </input>
                </div>
            </form>
        </div>
    );
}

export default Otp;