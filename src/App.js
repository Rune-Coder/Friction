import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Layout from './layout/layout';
import Home from './pages/home';
import WishList from './pages/wishList/wishList';
import Cart from './pages/cart/cart';
import Address from './pages/address/address';
import ProductView from './pages/productView/productView';
import NotFound from './pages/notFound/notFound';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path = "/" exact element={<Navigate replace to="/home" />}/>
        <Route path = "/home" element = {<Home />} />
        <Route path = "/shoes" element = {<ProductView />} />
        <Route path = "/wishlist" element = {<WishList />} />
        <Route path = "/cart" element = {<Cart />} />
        <Route path = "/address" element = {<Address />} />
        <Route path = "*" element = {<NotFound />} />
      </Routes>
    </Layout>

  );
}

export default App;
