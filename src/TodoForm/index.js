import React from "react";
import './TodoForm.css';
function TodoForm(){
  return (
    <form>
        <label>Type in your new TODO</label>
        <textarea
        placeholder="get some onions from Walmart"/>
        <div className="TodoForm-buttonContainer">
          <button className="TodoForm-button TodoForm-button--cancel"
        
          >Cancel</button>
          <button className="TodoForm-button TodoForm-button--add"
        
          >Add</button>
        </div>
    </form>
  );
}
export { TodoForm };