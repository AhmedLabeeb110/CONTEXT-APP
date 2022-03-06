import React from "react";

//import custom hook
import { useTheme } from "../hooks/useTheme.js";

const ContextOutput = () => {

  const { color } = useTheme();

  return <div style={{ background: color }}>ContextOutput</div>;
};

export default ContextOutput;
