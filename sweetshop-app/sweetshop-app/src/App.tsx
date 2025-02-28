import React from 'react';
import Login from './components/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Products from './components/Products';

export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route element={<Login/>} path="/login" />
        <Route element={<Navbar/>} path="/navbar"/>
        <Route element={<Products/>} path="/products"/>



      </Routes>
      
      
      </BrowserRouter>






      



    </div>
  )
}
