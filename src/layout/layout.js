import React from 'react';
import Navbar from '../navbar/navbar';
import ShoeMenu from '../shoeMenu/shoeMenu';
import Advertise from '../advertise/advertise';
import Footer from '../footer/footer';
import { Fragment } from 'react/cjs/react.production.min';

function Layout(props) {
    return(
        <Fragment>
            <Navbar />
            <ShoeMenu />
            <main>{props.children}</main>
            <Advertise />
            <Footer />
        </Fragment>
    );
}

export default Layout;