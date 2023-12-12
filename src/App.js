import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

/* const defaultTodos =[
  {text: 'Cut Onions', completed: true},
  {text: 'Buy things in the grocery', completed: false},
  {text: 'Study JS', completed: true},
  {text: 'Work and Work', completed: false},
  {text: 'Learn React<3 with passion', completed: true}
];
localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos)); */



function useLocalStorage(itemName, initialValue) {
  const localStorageItem = localStorage.getItem(itemName);
  let parsedItem;

  if(!localStorageItem){
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedItem =initialValue;
  }else{
    parsedItem = JSON.parse(localStorageItem);
  }

  const [item, setItem] = React.useState(parsedItem);
  

  //Save localStorage Data
  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };

  return [item, saveItem];
}

function App() {
  let titles="";
  const [todos, saveItem] = useLocalStorage('TODOS_V1', []);
  const [searchValue, setsearchValue] = React.useState('');

  const completedTodos = todos.filter((todo)=> 
  !!todo.completed).length;
  const totalTodos = todos.length;

  
  if(completedTodos === totalTodos){
      titles = `Well done, all good up to date`;
    }else{
      titles = `You have completed ${completedTodos} of ${totalTodos} to do`;
    }
  
  
  const searchedTodos = todos.filter(
    (todo) =>{
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    }
  );
      
    // I created a copy de original todo array and then filtered by findIndex of the text that match the text of the to do and then toggled
  const completeTodo = (text) => {
    const newTodos =[...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
      );
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveItem(newTodos);
  };

  
  const DeleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos.splice(todoIndex,1);
    saveItem(newTodos);
  };
  

  // El estado es inmutable y no debe ser cambiado por esto react nos proporciona la funcion set para cambiar el estado
  
  return (
    <> 
    {/* React can not render a multiple components biyitself so it needs to be inside of at least one element "App" in this case  the ONLY way it is with React.Fragment (Empty it will be the same) element (Do not forget to use the import React from react)*/}

      <TodoCounter 
        titles ={titles}
        /* completed={completedTodos} 
        total={totalTodos} *//>
      <TodoSearch 
        searchValue={searchValue}
        setsearchValue={setsearchValue}
      />

      <TodoList>
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



export default App;
