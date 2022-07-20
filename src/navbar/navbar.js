import React, { useState } from 'react';
import classes from './navbar.module.css';
import BurgerIcon from '../icons/burgerIcon';
import CloseIcon from '../icons/closeIcon';
import CartIcon from '../icons/cartIcon';
import HeartIcon from '../icons/heartIcon';
import ProfileIcon from '../icons/profileIcon';
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
      <p className={classes.burger} onClick={menuOpenHandler}><span className={classes.menuIcons}><BurgerIcon /></span></p>
      <div>Icon</div>
      <div className={classes.cart}><span className={classes.navIcons}><CartIcon /></span></div>
      <SearchBox />
      <ul className = {`${classes.navlist} ${!closeMenu && classes.menubar}  ${closeMenu && ''}`}>
          <li className={classes.close} onClick={menuCloseHandler}><span className={classes.menuIcons}><CloseIcon /></span></li>
          <li><span className={classes.navIcons}><ProfileIcon /></span>Profile</li>
          <li><span className={classes.navIcons}><HeartIcon /></span>Wishlist</li>
          <li className={classes.cartMenu}>
            <span className={classes.navIcons}><CartIcon /></span>Bag
          </li>
      </ul>
    </div>
  );
}
  
export default Navbar;





  