import React from 'react';
import classes from './searchBox.module.css';

function SearchBox(props){
    return(
        <div className={classes.search}>
            <input type="text" name="search" placeholder='Search for boots, sneakers, etc.' />
        </div>
    );
}

export default SearchBox;