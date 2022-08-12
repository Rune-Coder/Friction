import React from 'react';

import CheckIcon from '../icons/checkIcon';
import CloseIcon from '../icons/closeIcon';
import classes from './toastCard.module.css';

function ToastCard(props){
    function closeHandler(event){
        props.close(1);
    }

    if(props.change === "+")
        var update = "added to";
    else
        var update = "removed from";
    return(
        <div className={classes.layout}>
            <span className={classes.close} onClick={closeHandler}><CloseIcon /></span>
            <div className={classes.checkBox}><span className={classes.check}><CheckIcon /></span></div>
            <p className={classes.msg}>Item is {update} {props.value}</p>
            <div className={classes.progress}></div>
        </div>
    );
}

export default ToastCard;