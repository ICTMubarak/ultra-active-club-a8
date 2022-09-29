import React from 'react';
import './Course.css'

const Course = (props) => {

   
    return (
     
        <div className='card'>
            <img src={props.course.img} alt="" />
            <h3>Course Name: {props.course.name}</h3>
            <h4>Course Duration: {props.course.time} Hours</h4>
            <button className='btn-style' onClick={() => props.handleCourseClick(props.course)}>Add to list</button>
        </div>
        
        
    );
};

export default Course;