import React from 'react';
import classes from './footer.module.css';

function Footer(props) {
    return(
        <div className={classes.footr}>
            <div className={classes.footrNav}>
                <div>
                    <ul className={classes.list}><span className={classes.listHead}>ONLINE SHOPPING</span>
                        <li>Men</li>
                        <li>Women</li>
                        <li>Kids</li>
                    </ul>
                </div>
                <div>
                    <ul className={classes.list}><span className={classes.listHead}>CUSTOMER POLICIES</span>
                        <li>Blog</li>
                        <li>Contact Us</li>
                        <li>FAQ</li>
                        <li>Terms & Conditions</li>
                        <li>Terms of Use</li>
                        <li>Track Orders</li>
                        <li>Cancellation</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div>
                    <ul className={classes.list}><span className={classes.listHead}>CONNECT WITH US</span>
                        <li>Facebook</li>
                        <li>Instagram</li>
                        <li>Youtube</li>
                        <li>LinkedIn</li>
                        <li>Twitter</li>
                        <li>Pinterest</li>
                    </ul>
                </div>
            </div>
            <hr className={classes.line} />
            <div className={classes.payments}>
                <p>Payment Methods</p>
                <ul>
                    <li>Net Banking</li>
                    <li>Visa</li>
                    <li>MasterCard</li>
                    <li>CASH ON DELIVERY</li>
                    <li>JIO Money</li>
                </ul>
            </div>
        </div>
    );
}

export default Footer;