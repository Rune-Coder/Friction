import React from "react";

import RegisterForm from "./registerForm";
import classes from "./signUp.module.css";

function SignUp(props) {
  return (
    <div className={classes.bg}>
        <div className={classes.createAcc}>
            <p className={classes.head}>Create Account</p>
            <div className={classes.fixedLabel}>Mobile Number</div>
            <div className={classes.mobile}>xxxxxxxxxx</div>
            <RegisterForm />
        </div>
    </div>
  );
}

export default SignUp;
