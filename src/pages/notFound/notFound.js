import React from 'react';
import rack from '../../image/shoe-rack.jpg';
import classes from './notFound.module.css';

function NotFound(props){
    return (
        <div className={classes.empty}>
            <img src = {rack} alt = "Loading..."></img>
            <p className={classes.head}>We couldn't find any matches!</p>
            <p>Please check the spelling or try searching something else</p>
        </div>
    );
}

export default NotFound;