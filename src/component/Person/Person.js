import React from 'react';
import './Person.css'

const person = (props) =>{
return (
    <div className="card">
        <p>{props.brand} made {props.model} bike.</p> <p>{props.children}</p>
    </div>
)
}
export default person;