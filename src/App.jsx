import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Store from './Pages/Store';
import About from './Pages/About';
import Success from './Pages/Success';
import Cancel from './Pages/Cancel';
import { Container } from 'react-bootstrap';
import React from 'react';
import CartProvider from '../CartContext';

function App() {

  return (
    <>
      <CartProvider>
        <div className="App">


          <Container>
            <Navbar />
            <Routes>
              <Route path="/" element={<Store />} />
              <Route path="/about" element={<About />} />
              <Route path="/success" element={<Success />} />
              <Route path="/store" element={<Store />} />
              <Route path="/cancel" element={<Cancel />} />
            </Routes>
          </Container>
        </div>
      </CartProvider>
    </>
  )
}


export default App
