import React, { useState } from 'react';

import classes from './addressForm.module.css';

function AddressForm(props){
    const [mob, setMob] = useState(" ");
    const [pin, setPin] = useState(" ");

    function addressSave(event){  
        event.preventDefault();

        var ok = 0;
        //Mobile no validation

        if(mob.length < 10)
            alert("Minimum length is 10");
        else if(/^\d+$/.test(mob) === false)
            alert("Please enter a valid 10 digit mobile number");
        else if(mob.charAt(0) < 6)
            alert("Please enter a valid 10 digit mobile number");
        else
            ok = 1;
        if(ok === 0)
            return;

        //Pin code validation

        if(pin.length < 6)
            alert("Minimum length is 6");
        else if(/^\d+$/.test(pin) === false)
            alert("Only numbers are allowed");
        else
            ok = 1;
    }
    function mobHandler(event){
        const no = event.target.value;
        setMob(no);    
    }
    function pinHandler(event){
        const code = event.target.value;
        setPin(code); 
        
        if(code.length < 6)
            alert("Minimum length is 6");
        else if(/^\d+$/.test(code) === false)
            alert("Only numbers are allowed");
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