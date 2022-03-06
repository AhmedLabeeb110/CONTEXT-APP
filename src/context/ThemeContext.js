//Create the Context fuctions and data in a files first in the following manner:

//import this "createContext" function from "React"

import { createContext, useReducer } from "react";

//Save and export the "createContext function" in a variable, you can name the variable anything but it's best to follow a nice format like:
//AuthContext/ThemeContext, etc

export const ThemeContext = createContext();

//functionalities, you can name the function anything
//invoke themeReducer for implementing various state logic

//Switch statement is used to check the type property of the action
//action.type evalutes the acrtion type through the parameters
//Case specifies the case
//Value should refer to the payload
//default value passes a value in case none of the cases matched
const themeReducer = (state, action) => {
   switch(action.type){
     case 'CHANGE_COLOR':
      return {...state, color: action.payload}
      default:
         return state
   }
}


export function ThemeProvider({ children }) {
   //invoke the reducer function/hook here and pass the function name as the first argument in the parameter, 
   //for the second argument pass the pass the anitial state which in this case is an object with a color property

   //the initial state is whats defined in the object and dispatch function is like setState. Dispatch function is used
   //for state change by useReducer hook/function
   //Once this function is called it trigers main reducer function(theme reducer) and takes in current and updated state passed in the dispatched call                                                                                                                      

   const [state, dispatch] = useReducer(themeReducer, {
      color: "blue"
   });
   
   //Type property confirms the type of action that needs to ne performed 
   //Payload if the value that is to be set
   const changeColor = (color) => {
      dispatch({ type: 'CHANGE_COLOR', payload: color})
   }

  return (
    <ThemeContext.Provider value={{...state, changeColor}}>
      {children}
    </ThemeContext.Provider>
  );
}
