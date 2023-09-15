import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import React from 'react';
import Contact from './Pages/Contact';
import Footer from './Components/Footer';

function App() {

  return (
    <>
      <div className="App">


        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/store" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </>
  )
}


export default App
