import React from 'react';
import './Header.css';
import logo from '../../images/udemy-logo.png';

const Header = () => {
    return (
        <header>
            <img src={logo} alt="logo" />
            <h1 className="title">Reach Udemy App</h1>
        </header>
    );
};

export default Header;