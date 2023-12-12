import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoLoading } from '../TodoLoading';
import { EmptyTodos } from '../EmptyTodos';
import { TodoError } from '../TodoError';
function AppUI( {
  titles,
  searchValue,
  setsearchValue,
  searchedTodos,
  completeTodo,
  DeleteTodo,
  loading,
  error,
}){
  return(
  
  /* React can not render a multiple components biyitself so it needs to be inside of at least one element "App" in this case  the ONLY way it is with React.Fragment (Empty it will be the same) element (Do not forget to use the import React from react) */
  <> 
    <TodoCounter 
      titles ={titles}
    />
    <TodoSearch 
      searchValue={searchValue}
      setsearchValue={setsearchValue}
    />

    <TodoList>
      {loading && <TodoLoading/>}
      {error && <TodoError/>}
      {(!loading && searchedTodos.length === 0) && <EmptyTodos/>}
      {searchedTodos.map(todo => (
        <TodoItem 
        key = {todo.text} 
        text={todo.text}
        completed={todo.completed}
        onComplete={() => completeTodo(todo.text)}
        onDelete={() => DeleteTodo(todo.text)}
        />
      ))}
    </TodoList>

    <CreateTodoButton />
  </>
  );
}
export { AppUI };