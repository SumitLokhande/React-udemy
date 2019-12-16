import React from "react";
import "./Person.css";

const person = props => {
  console.log(props);
  return (
    <div className="card">
      {props.children}
      <p>
        {props.brand} made {props.model} bike.
      </p>
    </div>
  );
};
export default person;
