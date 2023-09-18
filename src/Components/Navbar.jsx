import React from 'react'
import './Navbar.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {



    return (
        <>
            <nav expand="sm" className='navbar-is-transparent is-fullscreen ' id="section-one">

                <div className='links'>
                    <Link to="/"><div className='link'>Search</div></Link>
                    <Link to="/about"><div className='link'>About</div>
                    </Link><Link to="/contact"><div className='link'>Contact</div></Link>
                </div>

            </nav>

        </>
    )
}

export default Navbar
