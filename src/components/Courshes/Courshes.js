import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';
import './Courshes.css'
import '../Course/Course.css'


const Courshes = () => {

    const [courshes, setCourshes] = useState([]);
    useEffect (() => {
         fetch('course.json')
        .then(res => res.json())
        .then(data => setCourshes(data))
    } ,[])

    return (
        <div className='courshes-comtainer'>
            <div className='course'>
                     {
                        courshes.map(course => <Course key={course.id} course ={course}></Course>)
                     }
            </div>               
            
        </div>
    );
};

export default Courshes;