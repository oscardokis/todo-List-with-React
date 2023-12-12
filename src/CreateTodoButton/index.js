import "./CreateTodoButton.css"
function CreateTodoButton(){
  return(
    <button id="TodoButton" className="TodoButtonCss"
    onClick={(event) => console.log(event)}>+</button>
  );
}

export { CreateTodoButton };