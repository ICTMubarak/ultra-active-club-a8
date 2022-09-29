import React from 'react';
import './Header.css'
import logo from '../../images/logo.jpg'

const Header = () => {
    return (
        <div className='header'>
            <div>
                <img src={logo} alt="logo" />
                <h1>Programming-Club</h1>
                <h3>Blog</h3>

            </div>
            <div>
                <h1>Mubarak hossain</h1>
            </div>

        </div>
    );
};

export default Header;