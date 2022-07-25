import React from 'react';
import './App.css';
import Navbar from './navbar/navbar';
import ShoeMenu from './shoeMenu/shoeMenu';
import OfferHeader from './offerHeader/offerHeader';
import Catalogue from './catalogue/catalogue';
import ProductView from './productView/productView';
import Advertise from './advertise/advertise';
import Footer from './footer/footer';

function App() {
  return (
    <div>
      <Navbar />
      <ShoeMenu />
      <OfferHeader />
      <Catalogue />
      <ProductView />
      <Advertise />
      <Footer />
    </div>
  );
}

export default App;
