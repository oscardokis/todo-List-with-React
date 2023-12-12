import "./TodoItem.css";
import { DeleteIcon } from "../TodoIcon/DeleteIcon";
import { CompleteIcon } from "../TodoIcon/CompleteIcon";
function TodoItem(props){
  return(
    <li>
      <CompleteIcon 
      completed= {props.completed}
      onComplete = {props.onComplete}/>
      {/* <div 
      className={`${props.completed && "VTodoItemCompleted"}`} 
      id="v"
      >V</div> */}
      <p onClick={props.onComplete} className= {`${props.completed && "TodoItemCompleted"}`}>{props.text}</p>
      {/* <div onClick={props.onDelete} className="x">X</div> */}
      <DeleteIcon 
      completed= {props.completed}
      onDelete={props.onDelete}
      />
    </li>
  );
}
export { TodoItem };