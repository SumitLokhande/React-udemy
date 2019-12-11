import React, { useState } from 'react';
import './Person.css'

const Person = (props) =>{
   const [listIndex , updateIndexs] = useState({
        index:[
            { no :1},
            { no :2},
            { no :3},
        ]
    });
    const handler =()=>{
        updateIndexs({
            index:[
                { no :2},
                { no :2},
                { no :3},
            ]
        })
    }
return (
    <div className="card">
<strong>{listIndex.index[0].no}</strong> 
    <button onClick={handler}>Click</button>
   <p>{props.brand} made {props.model} bike.</p> <p>{props.children}</p>
    </div>
)
}
export default Person;