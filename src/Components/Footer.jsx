import React from 'react'
import '../Components/Footer.css';
import { FaFacebook, FaYoutube } from 'react-icons/fa';
import { BsGithub, BsLinkedin } from 'react-icons/bs';


const Footer = () => {
    return (
        <footer className="footer">
            <div className="content has-text-centered">
                <p className='text'>By newbie developer: Ryan-Phillips.</p>
            </div>
            <ul className='socials'>
                <li><a href="https://www.facebook.com/ryanphillips.cornelio/"><FaFacebook /></a></li>
                <li><a href="https://www.linkedin.com/in/ryan-phillips-iserhills-cornelio/"><BsLinkedin /></a></li>
                <li><a href="https://www.youtube.com/channel/UCOg3PF76vT3K6DMGcU7-XzA"><FaYoutube /></a></li>
                <li><a href="https://github.com/TechWithRyan"><BsGithub /></a></li>
            </ul>

        </footer >
    )
}

export default Footer
