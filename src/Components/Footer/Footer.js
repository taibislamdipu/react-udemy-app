import React from 'react';
import './Footer.css';
import logo from '../../images/udemy-logo.png'

const Footer = () => {
    return (
        <div>
            <footer>
                <img src={logo} alt="logo" />
            </footer>
        </div>
    );
};

export default Footer;