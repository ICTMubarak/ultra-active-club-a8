import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';
import mubarak from '../../images/mubarak.gif'
import './Courshes.css'
import '../Course/Course.css'


let t = 0;
const Courshes = () => {

    const [courshes, setCourshes] = useState([]);
    const [card, setCard] = useState([]);
   // console.log(courshes)

    useEffect (() => {
         fetch('course.json')
        .then(res => res.json())
        .then(data => setCourshes(data))
    } ,[])

   

    const handleCourseClick = (props) => {
        
        
        const newCard = [...card, props]
        setCard(newCard);

    }

   const arr = card.map(oneCard => oneCard.time);
   console.log(arr);
   
   const timeCount = arr.reduce(myFunction, 0);
   
   function myFunction(total, value) {
    return total + value;
  }

  console.log(timeCount);

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
                <h3>Course details: </h3>
                <h4>Course time: {timeCount} </h4>
         
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