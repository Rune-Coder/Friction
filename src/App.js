import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Layout from './layout/layout';
import Home from './pages/home';
import Cart from './pages/cart/cart';
import ProductView from './pages/productView/productView';
import NotFound from './pages/notFound/notFound';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path = "/" exact element={<Navigate replace to="/home" />}/>
        <Route path = "/home" element = {<Home />} />
        <Route path = "/shoes" element = {<ProductView />} />
        <Route path = "/cart" element = {<Cart />} />
        <Route path = "*" element = {<NotFound />} />
      </Routes>
    </Layout>

  );
}

export default App;
