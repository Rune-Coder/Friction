import React, { useState } from 'react';

import classes from './addressForm.module.css';

function AddressForm(props){
    const msg = {mobNo: "ok", pinCode: "ok"};

    const [name, setName] = useState(" ");
    const [mob, setMob] = useState(" ");
    const [pin, setPin] = useState(" ");
    const [house, setHouse] = useState(" ");
    const [town, setTown] = useState(" ");
    const [landmark, setLandmark] = useState(" ");
    const [errMsg, setErrMsg] = useState(msg);

    function addressSave(event){  
        event.preventDefault();

        if(errMsg.mobNo !== "ok" || errMsg.pinCode !== "ok")
            return;
        
        console.log(name, mob, pin, house, town, landmark);
        
        
    }

    function nameHandler(event){
        setName(event.target.value);
    }
    function mobHandler(event){
        setMob(event.target.value);  
        
        if(mob.length < 10)
            setErrMsg({ ...errMsg, mobNo: "Minimum length is 10"});
        else if(/^\d+$/.test(mob) === false || mob.charAt(0) < 6)
            setErrMsg({ ...errMsg, mobNo: "Please enter a valid 10 digit mobile number"});
        else
            setErrMsg({ ...errMsg, mobNo: "ok"});
    }
    async function pinHandler(event){
        const code = event.target.value;
        setPin(code); 

        let data;

        try{
            const res = await fetch(`https://cors-anywhere.herokuapp.com/http://www.postalpincode.in/api/pincode/${code}`, {
                   
                method: "GET",
                headers:{
                    "Content-Type": "application/json"
                },
            });

            data = await res.json();
            console.log(data);
        }
        catch(error){
            console.log(error);
            return;
        }

        if(data.Status === "Error"){
            setErrMsg({ ...errMsg, pinCode: "Invalid pincode"});
            return;
        }
        
        setErrMsg({ ...errMsg, pinCode: "ok"});

        console.log(data.PostOffice);

        
    }
    function houseHandler(event){
        setHouse(event.target.value);
    }
    function townHandler(event){
        setTown(event.target.value);
    }
    function landmarkHandler(event){
        setLandmark(event.target.value);
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
                        className={classes.textBox}
                        onBlur = {nameHandler}>
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
                        className={classes.textBox}
                        onBlur = {houseHandler}>
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
                        className={classes.textBox}
                        onBlur = {townHandler}>
                    </input>
                    <label className={classes.formLabel}>
                        Locality/Town*
                    </label>
                </div>
                <div className={classes.details}>
                    <input 
                        type= "text" 
                        placeholder=' '  
                        className={classes.textBox}
                        onBlur = {landmarkHandler}>
                    </input>
                    <label className={classes.formLabel}>
                        Landmark (optional)
                    </label>
                </div>
                <div className={classes.details}>
                    <div className={classes.fixed}>City/District*</div>
                </div>
                <div className={classes.details}>
                    <div className={classes.fixed}>State*</div>
                </div>
            </div>
            <button type= "submit" value="Submit" className={classes.save}>ADD ADDRESS</button>
        </form>
    );
}

export default AddressForm;