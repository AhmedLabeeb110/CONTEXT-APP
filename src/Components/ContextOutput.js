import React from "react";

//import custom hook
import { useTheme } from "../hooks/useTheme.js";

const ContextOutput = () => {

  const { color, changeColor } = useTheme();

  return <div style={{ background: color }} onClick={() => changeColor('pink')}>ContextOutput</div>;
};

export default ContextOutput;
