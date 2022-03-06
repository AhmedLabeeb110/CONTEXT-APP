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

reportWebVitals();