import React from "react";
import './TodoForm.css';
import { TodoContext } from "../TodoContext";
function TodoForm(){
  const {
    setopenModal,
    addTodo,
  } = React.useContext(TodoContext);
  const [newTodoValue, setnewTodoValue] = React.useState("");
  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
    setopenModal(false);
  };
  const onCancel = () => {
    setopenModal(false);
  };
  const onChange = (event) => {
    setnewTodoValue(event.target.value);
  };
  return (
    <form onSubmit={onSubmit}>
        <label>Type in your new TODO.</label>
        <textarea
        value = {newTodoValue}
        onChange={onChange}
        placeholder="get some onions from Walmart"/>
        <div className="TodoForm-buttonContainer">
          <button type="button" onClick={onCancel} className="TodoForm-button TodoForm-button--cancel"
        
          >Cancel</button>
          <button type="submit" className="TodoForm-button TodoForm-button--add"
        
          >Add</button>
        </div>
    </form>
  );
}
export { TodoForm };