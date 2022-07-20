import React from 'react';
import SearchIcon from '../icons/searchIcon';
import classes from './searchBox.module.css';

function SearchBox(props){
    return(
        <div className={classes.search}>
            <span  className={classes.searchIcon}><SearchIcon /></span><input type="text" name="search" placeholder='Search for boots, sneakers, etc.' />
        </div>
    );
}

export default SearchBox;