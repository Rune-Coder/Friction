import { React, useState } from 'react';
import { useSelector } from 'react-redux';
import CloseIcon from '../icons/closeIcon';
import classes from './alertCard.module.css';

function AlertCard(props){
    const alertItems = useSelector((state) => state.alertDetails);
    const [value, setValue] = useState(alertItems[0].value);
    setValue(alertItems[0].value.toString());

    function valueHandler(event){
        setValue(event.target.innerText);
        return;
    }

    return(
        <div className={classes.cardLayout}>
            <p className={classes.close}><span className={classes.closeIcon}><CloseIcon /></span></p>
            <p>Select Size</p>
            <div className={classes.value}>
                <button type = "button" className={value === "1" ? classes.active : ''} onClick={valueHandler}>1</button>
                <button type = "button" className={value === "2" ? classes.active : ''} onClick={valueHandler}>2</button>
                <button type = "button" className={value === "3" ? classes.active : ''} onClick={valueHandler}>3</button>
                <button type = "button" className={value === "4" ? classes.active : ''} onClick={valueHandler}>4</button>
                <button type = "button" className={value === "5" ? classes.active : ''} onClick={valueHandler}>5</button>
                <button type = "button" className={value === "6" ? classes.active : ''} onClick={valueHandler}>6</button>
                <button type = "button" className={value === "7" ? classes.active : ''} onClick={valueHandler}>7</button>
                <button type = "button" className={value === "8" ? classes.active : ''} onClick={valueHandler}>8</button>
                <button type = "button" className={value === "9" ? classes.active : ''} onClick={valueHandler}>9</button>
                <button type = "button" className={value === "10" ? classes.active : ''} onClick={valueHandler}>10</button>
            </div>
            <button type = "button" className={classes.done}>DONE</button>
        </div>
    );
}

export default AlertCard;