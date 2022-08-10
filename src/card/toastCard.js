import React from 'react';

import classes from './toastCard.module.css';

function ToastCard(props){
    return(
        <div className={classes.layout}>
            <p>Item is added to bag</p>
        </div>
    );
}

export default ToastCard;