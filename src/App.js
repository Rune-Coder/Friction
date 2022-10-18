import React, { Suspense } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import { UserData } from './connect/userData';
import { GetCookie } from './hooks/cookies';
import Layout from './layout/layout';
import PreLoader from './preLoader/preLoader';

const Home = React.lazy(() => import('./pages/home'));
const Profile = React.lazy(() => import('./pages/profile/myProfile'));
const SignIn = React.lazy(() => import('./pages/signIn/signIn'));
const SignUp = React.lazy(() => import('./pages/createAcc/signUp'));
const ShoeTypes = React.lazy(() => import('./pages/shoeTypes/shoeTypes'));
const Orders = React.lazy(() => import('./pages/orders/orders'));
const WishList = React.lazy(() => import('./pages/wishList/wishList'));
const Cart = React.lazy(() => import('./pages/cart/cart'));
const Address = React.lazy(() => import('./pages/address/address'));
const ProductView = React.lazy(() => import('./pages/productView/productView'));
const NotFound = React.lazy(() => import('./pages/notFound/notFound'));

function App() {

  //get user data
    UserData(GetCookie("token"));
    console.log(GetCookie("token"));

  return (
    <Layout>
      <Suspense fallback= {<PreLoader />}>
        <Routes>
          <Route path = "/" exact element={<Navigate replace to="/home" />}/>
          <Route path = "/home" element = {<Home />} />
          <Route path = "/profile" element = {<Profile />} />
          <Route path = "/login" element = {<SignIn />} />
          <Route path = "/register" element = {<SignUp />} />
          <Route path = "/types/:tname" element = {<ShoeTypes />} />
          <Route path = "/orders" element = {<Orders />} />
          <Route path = "/shoes/:prdct/:pid/*" element = {<ProductView />} />
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
