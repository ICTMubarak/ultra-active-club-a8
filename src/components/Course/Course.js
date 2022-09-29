import React from 'react';
import './Course.css'

const Course = (props) => {
    console.log(props);
    return (
     
        <div>
            <img src={props.course.img} alt="" />
            <h3>Course Name: {props.course.name}</h3>
            <h4>Course Duration: {props.course.time}</h4>
            <button>Add to list</button>
        </div>
        
        
    );
};

export default Course;