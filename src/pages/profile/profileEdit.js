import React, { useState } from 'react';

import classes from './profileEdit.module.css';

function ProfileEdit(props){

    const [useName, setUseName] = useState(" ");
    const [useGen, setUseGen] = useState(" ");

    function loginHandler(event){

    }
    function nameHandler(event){
        setUseName(event.target.value);
    }
    function genHandler(event){
        var gen;
        if (document.getElementById('gen1').checked) {
            gen = document.getElementById('gen1').value;
            setUseGen(gen);
        }
        else if (document.getElementById('gen2').checked) {
            gen = document.getElementById('gen2').value;
            setUseGen(gen);
        }
    }

    return (
        <div className={classes.layout}>
            <form method='POST' className={classes.loginForm} onSubmit = {loginHandler}>
                <div className={classes.details}>
                    <input 
                        type= "text" 
                        placeholder=' ' 
                        required 
                        className={classes.textBox}
                        onBlur = {nameHandler}>
                    </input>
                    <label className={classes.formLabel}>
                       Full Name
                    </label>
                </div>
                <div className={classes.gen} onClick = {genHandler}>
                    <p>Select Gender:&nbsp;</p>
                    <input type="radio" id= "gen1" name="gender" value="Female" required>
                    </input>
                    <label for="gen1">Female</label>
                    <input type="radio" id= "gen2" name="gender" value="Male" required>
                    </input>
                    <label for="gen2">Male</label>
                </div>

                <button type= "submit" value="Submit" className={classes.save}>SAVE</button>

            </form>
        </div>
    );
}

export default ProfileEdit;