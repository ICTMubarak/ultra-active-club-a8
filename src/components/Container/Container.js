import React from 'react';
import './Container.css'
import logo from '../../images/logo.jpg'

import Courshes from '../Courshes/Courshes';

const Container = () => {

    return (
        <div className='container'>
            
            <div>
                     <div className='header'>
                        <img src={logo} alt="logo" />
                        <h1>Programming-Club</h1> 
                        <button><a href="/blog.html">Programming Blog</a></button>
                    </div>

                    <div>
                        <Courshes></Courshes>
                       
                    </div>
            </div>
            
       
            
            
        </div>
    );
};

export default Container;