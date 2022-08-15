import React, { Suspense } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Layout from './layout/layout';
import PreLoader from './preLoader/preLoader';

const Home = React.lazy(() => import('./pages/home'));
const WishList = React.lazy(() => import('./pages/wishList/wishList'));
const Cart = React.lazy(() => import('./pages/cart/cart'));
const Address = React.lazy(() => import('./pages/address/address'));
const ProductView = React.lazy(() => import('./pages/productView/productView'));
const NotFound = React.lazy(() => import('./pages/notFound/notFound'));

function App() {
  return (
    <Layout>
      <Suspense fallback= {<PreLoader />}>
        <Routes>
          <Route path = "/" exact element={<Navigate replace to="/home" />}/>
          <Route path = "/home" element = {<Home />} />
          <Route path = "/shoes" element = {<ProductView />} />
          <Route path = "/wishlist" element = {<WishList />} />
          <Route path = "/cart" element = {<Cart />} />
          <Route path = "/address" element = {<Address />} />
          <Route path = "*" element = {<NotFound />} />
        </Routes>
      </Suspense>
    </Layout>

  );
}

export default App;
