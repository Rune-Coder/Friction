import React, { useState } from 'react';
import classes from './navbar.module.css';
import SearchBox from './searchBox';

function Navbar(props) {
  const [closeMenu, setMenuClose] = useState(true);
  function menuOpenHandler(event){
    setMenuClose(false);
    return;
  }
  function menuCloseHandler(event){
    setMenuClose(true);
    return;
  }
  return (
    <div className= {classes.navbar}>
      <p className={classes.burger} onClick={menuOpenHandler}>HB</p>
      <div>Icon</div>
      <div className={classes.cart}>Cart</div>
      <SearchBox />
      <ul className = {`${classes.navlist} ${!closeMenu && classes.menubar}  ${closeMenu && ''}`}>
          <li className={classes.close} onClick={menuCloseHandler}>X</li>
          <li>Profile</li>
          <li>Wishlist</li>
          <li className={classes.cartMenu}>Cart</li>
      </ul>
    </div>
  );
}
  
export default Navbar;
  