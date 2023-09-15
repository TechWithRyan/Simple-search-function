import React from 'react'
import '../Components/Footer.css';
import { FaFacebook, FaYoutube } from 'react-icons/fa';
import { BsGithub, BsLinkedin } from 'react-icons/bs';


const Footer = () => {
    return (
        <footer className="footer">
            <div className="content has-text-centered">
                <p className='text'>Newbie Developer —  Ryan-Phillips.</p>
            </div>
            <ul className='socials'>
                <li><a href=""><FaFacebook /></a></li>
                <li><a href=""><BsLinkedin /></a></li>
                <li><a href=""><FaYoutube /></a></li>
                <li><a href=""><BsGithub /></a></li>
            </ul>

        </footer >
    )
}

export default Footer
