import React from 'react';
import "../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Pre = (props) => {
  return (
    <div id={props.load ? "preloader" : "preloader-none"}>
      
    </div>
  )
}

export default Pre
