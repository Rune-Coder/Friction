import React, { useState } from 'react';

import classes from './otp.module.css';

function Otp(props){

    const [sec, setSec] = useState(60);

    function autoFocus(seq, final){
        const initial = document.getElementById(seq);
        if(initial.value.length)
            document.getElementById(final).focus();
    }

    function timer(){
        setSec(sec-1);
    }

    if(sec > 0)
        setTimeout(timer, 1000);

    return(
        <div>
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
                        >
                    </input>
                    <input 
                        type= "text" 
                        maxLength= "1"
                        required 
                        id= {"sec"}
                        className={classes.textBox}
                        onKeyUp={() => autoFocus("sec", 'third')}
                        >
                    </input>
                    <input 
                        type= "text" 
                        maxLength= "1"
                        required 
                        id= {"third"}
                        className={classes.textBox}
                        onKeyUp={() => autoFocus("third", 'fourth')}
                        >
                    </input>
                    <input 
                        type= "text" 
                        maxLength= "1"
                        required 
                        id= {"fourth"}
                        className={classes.textBox}
                        onKeyUp={() => autoFocus("fourth", 'fifth')}
                        >
                    </input>
                    <input 
                        type= "text" 
                        maxLength= "1"
                        required 
                        id= {"fifth"}
                        className={classes.textBox}
                        onKeyUp={() => autoFocus("fifth", 'sixth')}
                        >
                    </input>
                    <input 
                        type= "text" 
                        maxLength= "1"
                        required 
                        id= {"sixth"}
                        className={classes.textBox}
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