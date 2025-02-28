import React from 'react';
import Login from './components/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Products from './components/Products';
import Contactus from './components/Contactus';
import Categories from './components/Categories';


export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route element={<Login/>} path="" />
        <Route element={<Navbar/>} path="/navbar"/>
        <Route element={<Products/>} path="/products"/>
        <Route element={<Contactus/>} path="/contactus"/>
        <Route element={<Categories/>} path="/categories"/>
        




      </Routes>
      
      
      </BrowserRouter>






      



    </div>
  )
}
