import React from "react";
import "./CreateTodoButton.css";
function CreateTodoButton({setopenModal}){
  return(
    <button id="TodoButton" className="TodoButtonCss"
    onClick={()=>{setopenModal(state => !state)}}>+</button>
  );
}

export { CreateTodoButton };