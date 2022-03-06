import React from "react";
//To use the Context Function/Provider " import {useContext| from 'react' " in the relevant files
import { useContext } from "react";

//import the const from the context files that has the provider function/component saved
import { ThemeContext } from "../context/ThemeContext";

const ContextOutput = () => {
  //useContext in effect here
  // destructure the relevant object properties from the context provider for usage
  const { color } = useContext(ThemeContext);

  return <div style={{ background: color }}>ContextOutput</div>;
};

export default ContextOutput;
