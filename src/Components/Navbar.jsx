import React from 'react'
import './Navbar.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Modal } from 'react-bootstrap';

const Navbar = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <nav expand="sm" className='navbar-is-transparent is-fullscreen' id="section-one">
                <Link to="/"> <h1 className='logo'>Nova</h1></Link>

                <div className='links'>
                    <Link to="/"><div className='link'>Home</div></Link>
                    <Link to="/cancel"><div className='link'>Cancel</div></Link><Link to="/Success"><div className='link'>Success</div></Link>
                </div>
                <div className='justify-content-end'>
                    <Button onClick={handleShow} className='btn'>Cart 0 items</Button>
                </div>
            </nav>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Shopping Cart</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h1>This is the modal body.</h1>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default Navbar
