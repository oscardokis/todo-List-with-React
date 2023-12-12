import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoLoading } from '../TodoLoading';
import { EmptyTodos } from '../EmptyTodos';
import { TodoError } from '../TodoError';
import { TodoContext } from '../TodoContext';
import React from 'react';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';
function AppUI(){
  const {searchedTodos,
    completeTodo,
    DeleteTodo,
    loading,
    error,
    openModal,
    setopenModal,
  } = React.useContext(TodoContext);
  return(
  
  /* React can not render a multiple components biyitself so it needs to be inside of at least one element "App" in this case  the ONLY way it is with React.Fragment (Empty it will be the same) element (Do not forget to use the import React from react) */
  <> 
    <TodoCounter/>
    <TodoSearch/>

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


    <CreateTodoButton 
      setopenModal={setopenModal}
    />

    {openModal && (
      <Modal>
        <TodoForm/>
      </Modal>
    )}
  </>
  );
}
export { AppUI };