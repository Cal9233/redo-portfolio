import React from 'react';
import Typewriter from "typewriter-effect";

const Type = () => {
  return (
    <>
    <Typewriter
    options={{
      strings: [
        "Developer",
        "MERN Stack Developer",
        "Software Engineer",
        "Programmer"
      ],
      autoStart: true,
      loop: true,
      deleteSpeed: 50,
    }}
    />
    </>
  )
}

export default Type
