import React from 'react';
import './App.css';
import Navbar from './navbar/navbar';
import OfferHeader from './offerHeader/offerHeader';
import Catalogue from './catalogue/catalogue';
import Advertise from './advertise/advertise';
import Footer from './footer/footer';

function App() {
  return (
    <div>
      <Navbar />
      <OfferHeader />
      <Catalogue />
      <Advertise />
      <Footer />
    </div>
  );
}

export default App;
