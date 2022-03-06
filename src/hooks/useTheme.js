//Hook files should always be named with the word "use" in the start

//Need these to extract context data/properties from the context file for using them in components through custom hooks 
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export const useTheme = () => {
    const context = useContext(ThemeContext)

    if (context === undefined){
        throw new Error("useTheme() must be used inside a ThemeProvider")
    }

    return context
}