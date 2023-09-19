import React, { useState } from 'react'
import './Navbar.css';
import { Link } from 'react-router-dom';
import { FaFacebook } from 'react-icons/fa';
import { Sling as Hamburger } from "hamburger-react";


const Navbar = () => {
    const [active, setActive] = useState(false);
    const toggle = () => {
        setActive(!active)
    }
    return (
        <>
            <nav className="navbar-is-transparent" role="navigation" aria-label="main navigation" style={{ height: '50px' }}>
                <div className='navbar-brand' style={{ fontWeight: 500, fontSize: '20px', marginLeft: '20px', marginTop: '10px' }}><div className='logo'>Resturang Thai Lee</div>

                    <div className={`navbar-burger ${active ? "is-active" : ""}`}>
                        <Hamburger
                            size={25}
                            color="white"
                            toggled={active}
                            easing="ease-in"
                            toggle={setActive}
                        />
                    </div>
                </div>

                <div className={`navbar-menu ${active ? 'is-active' : ''}`}>
                    <div className="navbar-end">

                        <div className='navbar-item'><div className='page'><Link to="/">Hem</Link></div>
                        </div>
                        <div className='navbar-item'><div className='page'><Link to="/menu">Meny</Link></div></div>
                        <div className='navbar-item'><div className='page'><Link to="/contact">Kontakt</Link></div></div>

                        <div className='navbar-item'>
                            <a href="https://www.facebook.com/profile.php?id=100089347540081"><FaFacebook /></a>
                        </div>
                    </div>
                </div>
            </nav >
        </>
    )
}

export default Navbar
