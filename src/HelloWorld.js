// src/HelloWorld.js
import React from 'react';
import { useSelector } from 'react-redux';

const HelloWorld = () => {
  const message = useSelector((state) => state.message);
  const mystyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial"
  };
  return <div>
   
    <h1 style={mystyle}>{message}</h1>
   
    </div>;
};

export default HelloWorld;
