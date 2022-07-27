import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Layout from './layout/layout';
import Home from './pages/home';
import ProductView from './productView/productView';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path = "/" exact element={<Navigate replace to="/home" />}/>
        <Route path = "/home" element = {<Home />} />
        <Route path = "/shoes" element = {<ProductView />} />
      </Routes>
    </Layout>
  );
}

export default App;
