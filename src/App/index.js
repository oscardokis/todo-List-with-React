import React from 'react';
import { AppUI } from './AppUI';
import { useLocalStorage } from './useLocalStorage';

/* localStorage.removeItem('TODOS_V1');
const defaultTodos =[
  {text: 'Cut Onions', completed: true},
  {text: 'Buy things in the grocery', completed: false},
  {text: 'Study JS', completed: true},
  {text: 'Work and Work', completed: false},
  {text: 'Learn React<3 with passion', completed: true}
];
localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos)); */

function App() {
  let titles="";
  const {
    item:todos, 
    saveItem, 
    loading,
    error,} = useLocalStorage('TODOS_V1', []);
  const [searchValue, setsearchValue] = React.useState('');

  const completedTodos = todos.filter((todo)=> 
  !!todo.completed).length;
  const totalTodos = todos.length;
  // 
  /* console.log('Log 1');
  React.useEffect(() => {console.log('Looooog 2')});
  console.log('Log 3'); */
  
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
    <AppUI
      titles = { titles }
      searchValue = { searchValue }
      setsearchValue = { setsearchValue }
      searchedTodos = { searchedTodos }
      completeTodo = { completeTodo }
      DeleteTodo = { DeleteTodo }
      loading = { loading }
      error = { error }
    />
  );
}



export default App;
