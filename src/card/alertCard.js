import { React, useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { cartActions } from '../store/cartStore';

import CloseIcon from '../icons/closeIcon';
import classes from './alertCard.module.css';

function AlertCard(props){
    const dispatch = useDispatch();
    const alertItems = useSelector((state) => state.alertDetails);

    const [value, setValue] = useState(alertItems[0].value.toString());

    function closeHandler(event){
        dispatch(cartActions.open({
            id: alertItems[0].id,
            topic: alertItems[0].topic,
            sz: alertItems[0].sz,
            value: alertItems[0].value,
        }));
    }
    function valueHandler(event){
        setValue(event.target.innerText);
        return;
    }
    function finalValue(event){
        dispatch(cartActions.done({
            id: alertItems[0].id,
            topic: alertItems[0].topic,
            sz: alertItems[0].sz,
            value: value,
        }));
    }

    return(
        <div className={classes.cardLayout}>
            <p className={classes.close}><span className={classes.closeIcon} onClick={closeHandler}><CloseIcon /></span></p>
            <p>Select {alertItems[0].topic}</p>
            <div className={classes.value}>
                {alertItems[0].topic === "Quantity" && <button type = "button" className={value === "1" ? classes.active : ''} onClick={valueHandler}>1</button>}
                {alertItems[0].topic === "Quantity" && <button type = "button" className={value === "2" ? classes.active : ''} onClick={valueHandler}>2</button>}
                {alertItems[0].topic === "Quantity" && <button type = "button" className={value === "3" ? classes.active : ''} onClick={valueHandler}>3</button>}
                {alertItems[0].topic === "Quantity" && <button type = "button" className={value === "4" ? classes.active : ''} onClick={valueHandler}>4</button>}
                {alertItems[0].topic === "Quantity" && <button type = "button" className={value === "5" ? classes.active : ''} onClick={valueHandler}>5</button>}
                <button type = "button" className={value === "6" ? classes.active : ''} onClick={valueHandler}>6</button>
                <button type = "button" className={value === "7" ? classes.active : ''} onClick={valueHandler}>7</button>
                <button type = "button" className={value === "8" ? classes.active : ''} onClick={valueHandler}>8</button>
                <button type = "button" className={value === "9" ? classes.active : ''} onClick={valueHandler}>9</button>
                <button type = "button" className={value === "10" ? classes.active : ''} onClick={valueHandler}>10</button>
            </div>
            <button type = "button" className={classes.done} onClick={finalValue}>DONE</button>
        </div>
    );
}

export default AlertCard;