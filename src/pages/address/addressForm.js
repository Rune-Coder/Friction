import React from 'react';

import classes from './addressForm.module.css';

function AddressForm(props){
    return(
        <form>
            <div className={classes.con}>
                <p className={classes.head}>CONTACT DETAILS</p>
                <div className={classes.details}>
                    <input 
                        type= "text" 
                        placeholder='Name*' 
                        required 
                        className={classes.textBox}>
                    </input>
                </div>
                <div className={classes.details}>
                    <input 
                        type= "text" 
                        placeholder='Mobile No*' 
                        maxlength="10" 
                        required 
                        className={classes.textBox}>
                    </input>
                </div>
            </div>
            <div className={classes.add}>
                <p className={classes.head}>ADDRESS</p>
                <div className={classes.details}>
                    <input 
                        type= "text" 
                        placeholder='Pin Code*' 
                        required 
                        className={classes.textBox}>
                    </input>
                </div>
                <div className={classes.details}>
                    <input 
                        type= "text" 
                        placeholder='Address(House No, Building, Street, Area)*'  
                        required 
                        className={classes.textBox}>
                    </input>
                </div>
                <div className={classes.details}>
                    <input 
                        type= "text" 
                        placeholder='Locality/Town*'  
                        required 
                        className={classes.textBox}>
                    </input>
                </div>
            </div>
            <button type= "submit" value="Submit" className={classes.save}>ADD ADDRESS</button>
        </form>
    );
}

export default AddressForm;