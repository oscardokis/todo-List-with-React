import { TodoContext } from "../TodoContext";
import React from "react";
import "./TodoCounter.css";
function TodoCounter(){
  const {titles} = React.useContext(TodoContext);
  return(
    <h1>{titles}</h1>
  );
  
}
export { TodoCounter }; 