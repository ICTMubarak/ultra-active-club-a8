import React from 'react';
import './Course.css'

const Course = (props) => {
    const {img, name, time} = props.course;
   
    return (
        <div className='card'>
            <img src={img} alt="" />
            <h3>Course Name: {name}</h3>
            <h4>Course Duration: {time} Hours</h4>
            <button className='btn-style' onClick={() => props.handleCourseClick(props.course)}>Add to list</button>
        </div>   
    );
};

export default Course;