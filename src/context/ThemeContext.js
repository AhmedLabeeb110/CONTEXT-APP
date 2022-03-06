//Create the Context fuctions and data in a files first in the following manner:

//import this "createContext" function from "React"

import { createContext } from "react";

//Save and export the "createContext function" in a variable, you can name the variable anything but it's best to follow a nice format like:
//AuthContext/ThemeContext, etc

export const ThemeContext = createContext();

//functionalities, you can name the function anything

export function ThemeProvider({ children }) {
   return(
    <ThemeContext.Provider value={{ color: "blue" }}>
       {children}
    </ThemeContext.Provider>
   )
}