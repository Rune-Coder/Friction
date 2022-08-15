import React, { useState } from 'react';

import classes from './addressForm.module.css';

function AddressForm(props){
    const msg = {mobNo: "ok", pinCode: "ok"};

    const [mob, setMob] = useState(" ");
    const [pin, setPin] = useState(" ");
    const [errMsg, setErrMsg] = useState(msg);

    function addressSave(event){  
        event.preventDefault();

        var ok = 0;
        //Mobile no validation

        if(mob.length < 10)
            setErrMsg({ ...errMsg, mobNo: "Minimum length is 10"});
        else if(/^\d+$/.test(mob) === false)
            setErrMsg({ ...errMsg, mobNo: "Please enter a valid 10 digit mobile number"});
        else if(mob.charAt(0) < 6)
            setErrMsg({ ...errMsg, mobNo: "Please enter a valid 10 digit mobile number"});
        else{
            ok = 1;
            setErrMsg({ ...errMsg, mobNo: "ok"});
        }
        if(ok === 0)
            return;

        //Pin code validation

        ok = 0;
        if(pin.length < 6)
            setErrMsg({ ...errMsg, pinCode: "Minimum length is 6"});
        else if(/^\d+$/.test(pin) === false)
            setErrMsg({ ...errMsg, pinCode: "Only numbers are allowed"});
        else{
            ok = 1;
            setErrMsg({ ...errMsg, pinCode: "ok"});
        }
    }
    function mobHandler(event){
        const no = event.target.value;
        setMob(no);    
    }
    function pinHandler(event){
        const code = event.target.value;
        setPin(code); 
        
        if(code.length < 6)
            setErrMsg({ ...errMsg, pinCode: "Minimum length is 6"});
        else if(/^\d+$/.test(code) === false)
            setErrMsg({ ...errMsg, pinCode: "Only numbers are allowed"});
        else
            setErrMsg({ ...errMsg, pinCode: "ok"});
    }


    return(
        <form onSubmit={addressSave}>
            <div className={classes.con}>
                <p className={classes.head}>CONTACT DETAILS</p>
                <div className={classes.details}>
                    <input 
                        type= "text" 
                        placeholder=' ' 
                        required 
                        className={classes.textBox}>
                    </input>
                    <label className={classes.formLabel}>
                        Name*
                    </label>
                </div>
                <div className={classes.details}>
                    <input 
                        type= "text" 
                        placeholder=' ' 
                        maxlength="10" 
                        required 
                        className={classes.textBox}
                        onChange = {mobHandler}>
                    </input>
                    <label className={classes.formLabel}>
                        Mobile No*
                    </label>
                    {errMsg.mobNo !== "ok" && <p className={classes.errmsg}>{errMsg.mobNo}</p>}
                </div>
            </div>
            <div className={classes.add}>
                <p className={classes.head}>ADDRESS</p>
                <div className={classes.details}>
                    <input 
                        type= "text" 
                        placeholder=' ' 
                        maxlength="6" 
                        required 
                        className={classes.textBox}
                        onBlur = {pinHandler}>
                    </input>
                    <label className={classes.formLabel}>
                        Pin Code*
                    </label>
                    {errMsg.pinCode !== "ok" && <p className={classes.errmsg}>{errMsg.pinCode}</p>}
                </div>
                <div className={classes.details}>
                    <input 
                        type= "text" 
                        placeholder=' '  
                        required 
                        className={classes.textBox}>
                    </input>
                    <label className={classes.formLabel}>
                        Address(House No, Building, Street, Area)*
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
                        Locality/Town*
                    </label>
                </div>
            </div>
            <button type= "submit" value="Submit" className={classes.save}>ADD ADDRESS</button>
        </form>
    );
}

export default AddressForm;