import React from 'react';
import './Container.css'
import logo from '../../images/logo.jpg'
import mubarak from '../../images/mubarak.gif'
import Courshes from '../Courshes/Courshes';

const Container = () => {
    return (
        <div className='container'>
            
            <div>
                     <div className='header'>
                        <img src={logo} alt="logo" />
                        <h1>Programming-Club</h1> 
                    </div>

                    <div>
                        <Courshes></Courshes>
                    </div>
            </div>
            
        <div>
            <div className='woner-info'>
                <img src={mubarak} alt="" />
                <h4>Mubarak Hossain</h4>
            </div>

            <div>
                <h3>Course details:</h3>
                <h4>Course time: </h4> 
            </div>

            <div>
                <button>Activeity complidet</button>
            </div>
        </div>
            
            
        </div>
    );
};

export default Container;