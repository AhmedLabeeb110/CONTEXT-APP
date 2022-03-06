import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
//import the "Context Component" from the Context File 
import {ThemeProvider} from "./context/ThemeContext"

ReactDOM.render(
  <React.StrictMode>
   {/*Wrap up the app with the Context Provider Component*/}
   <ThemeProvider>
      <App />
   </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
