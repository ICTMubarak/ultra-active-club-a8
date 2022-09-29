import React from 'react';
import './Course.css'

const Course = (props) => {
console.log(props);
   
    return (
     
        <div className='card'>
            <img src={props.course.img} alt="" />
            <h3>Course Name: {props.course.name}</h3>
            <h4>Course Duration: {props.course.time}</h4>
            <button onClick={props.handleCourseClick}>Add to list</button>
        </div>
        
        
    );
};

export default Course;