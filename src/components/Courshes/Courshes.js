import React, { useEffect, useState } from 'react';


const Courshes = () => {

    const [courshes, setCourshes] = useState([]);
    useEffect (() => {
         fetch('course.json')
        .then(res => res.json())
        .then(data => console.log(data))
    } ,[])

    return (
        <div>
            <div>
                <h1>Select your course:</h1>
            </div>

            <div>
                <h3>Programming c</h3>
            </div>
            
        </div>
    );
};

export default Courshes;