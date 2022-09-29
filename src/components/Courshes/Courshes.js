import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';
import mubarak from '../../images/mubarak.gif'
import './Courshes.css'
import '../Course/Course.css'



const Courshes = () => {

    const [courshes, setCourshes] = useState([]);
    const [card, setCard] = useState([]);

    useEffect (() => {
         fetch('course.json')
        .then(res => res.json())
        .then(data => setCourshes(data))
    } ,[])

    const handleCourseClick = (props) => {
        console.log(props);
        const newCard = [...card, courshes]
        setCard(newCard);
    }

    return (
        <div className='courshes-comtainer'>
           
            <div className='course'>
                     {
                        courshes.map(course => <Course card ={card} key={course.id} course ={course} handleCourseClick={handleCourseClick}></Course>)
                     }
            </div>   

            <div>
            <div>
            <div className='woner-info'>
                <img src={mubarak} alt="" />
                <h4>Mubarak Hossain</h4>
            </div>

            <div>
                <h3>Course details:{card.length}</h3>
                <h4>Course time: </h4> 
            </div>

            <div>
                <button>Activeity complidet</button>
            </div>
          </div>
                
            </div>
            
                      
            
        </div>
    );
};

export default Courshes;