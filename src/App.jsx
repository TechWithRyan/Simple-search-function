import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import React from 'react';
import Contact from './Pages/Contact';
import Footer from './Components/Footer';
import "bulma/css/bulma.css"
import Menu from './Pages/Menu';


function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/store" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

    </>
  )
}


export default App
