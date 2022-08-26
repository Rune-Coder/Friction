import React, { useState } from 'react';

import ToastCard from '../../card/toastCard';
import classes from './otp.module.css';

function Otp(props){

    const [sec, setSec] = useState(60);
    const [otpLen, setOtpLen] = useState(0);
    const [showToast, setShowToast] = useState(false);

    function autoFocus(seq, final){
        const initial = document.getElementById(seq);
        if(initial.value.length)
            document.getElementById(final).focus();
        return;
    }

    function getOtp(){
        const finalOtp = document.getElementById("first").value+
        document.getElementById("sec").value+
        document.getElementById("third").value+
        document.getElementById("fourth").value+
        document.getElementById("fifth").value+
        document.getElementById("sixth").value;
        if(finalOtp === "111111")
            alert("ok");
        else{
            setShowToast(true);
            setTimeout(function(){ setShowToast(false); }, 3000);
        }
    }

    function otpHandler(event){
        const no = event.target.value;

        if(no === "" && otpLen !== 0)
            setOtpLen(otpLen-1);
        else{
            if(otpLen === 5)
                getOtp();
            setOtpLen(otpLen+1);
        }

        return;
    }

    function timer(){
        setSec(sec-1);
        return;
    }
    function remToast(rem){
        setShowToast(false);
        return;
    } 

    if(sec > 0)
        setTimeout(timer, 1000);

    return(
        <div>
            {showToast && <div className={classes.toast}> <ToastCard close = {remToast} value = "Incorrect OTP" /> </div>}
            <form>
                <p className={classes.head}>Verify with OTP</p>
                <p className={classes.subHead}>Sent to {props.num}</p>
                <div className={classes.otpDetails}>
                    <input 
                        type= "text" 
                        maxLength= "1"
                        required 
                        id= {"first"}
                        className={classes.textBox}
                        onKeyUp={() => autoFocus("first", 'sec')}
                        onChange = {otpHandler}
                        >
                    </input>
                    <input 
                        type= "text" 
                        maxLength= "1"
                        required 
                        id= {"sec"}
                        className={classes.textBox}
                        onKeyUp={() => autoFocus("sec", 'third')}
                        onChange = {otpHandler}
                        >
                    </input>
                    <input 
                        type= "text" 
                        maxLength= "1"
                        required 
                        id= {"third"}
                        className={classes.textBox}
                        onKeyUp={() => autoFocus("third", 'fourth')}
                        onChange = {otpHandler}
                        >
                    </input>
                    <input 
                        type= "text" 
                        maxLength= "1"
                        required 
                        id= {"fourth"}
                        className={classes.textBox}
                        onKeyUp={() => autoFocus("fourth", 'fifth')}
                        onChange = {otpHandler}
                        >
                    </input>
                    <input 
                        type= "text" 
                        maxLength= "1"
                        required 
                        id= {"fifth"}
                        className={classes.textBox}
                        onKeyUp={() => autoFocus("fifth", 'sixth')}
                        onChange = {otpHandler}
                        >
                    </input>
                    <input 
                        type= "text" 
                        maxLength= "1"
                        required 
                        id= {"sixth"}
                        className={classes.textBox}
                        onChange = {otpHandler}
                        >
                    </input>
                </div>
                {sec > 0 && <p className={classes.resendTimer}>Resend OTP in 00:{("0" + sec).slice(-2)}</p>}
                {!sec && <p className={classes.resend}>RESEND OTP</p>}
            </form>
        </div>
    );
}

export default Otp;