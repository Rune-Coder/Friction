import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import classes from './navbar.module.css';
import BurgerIcon from '../icons/burgerIcon';
import CloseIcon from '../icons/closeIcon';
import CartIcon from '../icons/cartIcon';
import HeartIcon from '../icons/heartIcon';
import ProfileIcon from '../icons/profileIcon';
import ProfileAccordian from './profileAccordian';
import SearchBox from './searchBox';
import ShoeMenu from '../shoeMenu/shoeMenu';
import ShoeMenuSmall from './shoeMenuSmall';


function Navbar(props) {
  let navigate = useNavigate(); 
  const itemFreq = useSelector((state) => state.cart.bill);
  
  function toHome(){ 
    let path = `/home`; 
    navigate(path);
  }
  function toWishList(){ 
    if(!closeMenu)
      setMenuClose(true);
    
    let path = `/wishlist`; 
    navigate(path);
  }
  function toCart(){ 
    let path = `/cart`; 
    navigate(path);
  }

  const [closeMenu, setMenuClose] = useState(true);
  const [addProfOps, setAddProfOps] = useState(false);
  function menuOpenHandler(event){
    setMenuClose(false);
    return;
  }
  function menuCloseHandler(event){
    setMenuClose(true);
    return;
  }
  function profileHandler(event){
    if(addProfOps === true)
      setAddProfOps(false);
    else
      setAddProfOps(true);
    return;
  }
  
  return (
    <div className= {classes.navbar}>
      <p className={classes.burger} onClick={menuOpenHandler}><span className={classes.menuIcons}><BurgerIcon /></span></p>
      
      <div onClick={toHome}>Friction</div>

      <div className={classes.cart} onClick={toCart}>
        <span className={classes.navIcons}><CartIcon /></span>
        {itemFreq[0].len !== 0 && <span className={classes.notify}>{itemFreq[0].len}</span>}
      </div>

      <SearchBox />
      
      <div className = {`${!closeMenu && classes.backdrop}  ${closeMenu && ''}`} onClick={menuCloseHandler}/>
      
      <ul className = {`${classes.navlist} ${!closeMenu && classes.menubar}  ${closeMenu && ''}`}>
          
          <li className={classes.close} onClick={menuCloseHandler}><span className={classes.menuIcons}><CloseIcon /></span></li>
          <li onMouseOver = {profileHandler} onMouseOut = {profileHandler}><span className={classes.navIcons}><ProfileIcon /></span>
            Profile
            <div className = {`${classes.profileOps} ${addProfOps && classes.activeTypes}  ${!addProfOps && ''}`}>
              <ProfileAccordian />
            </div>
          </li>
          <li onClick={toWishList}>
            <span className={classes.navIcons}><HeartIcon /></span>
            Wishlist
          </li>
          <li className={classes.cartMenu} onClick={toCart}>
            <span className={classes.navIcons}><CartIcon /></span>
            {itemFreq[0].len !== 0 && <span className={classes.notify}>{itemFreq[0].len}</span>}
            Bag
          </li>
          
          <span className={classes.showMenu}><ShoeMenuSmall /></span>
          
      </ul>

      <span className={classes.hideMenu}><ShoeMenu /></span>
      
      
    </div>
  );
}
  
export default Navbar;





  