import React from "react";

function useLocalStorage(itemName, initialValue) {

  const [item, setItem] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;
        if(!localStorageItem){
        localStorage.setItem(itemName, JSON.stringify(initialValue));
        parsedItem =initialValue;
        }else{
        parsedItem = JSON.parse(localStorageItem);
        setItem(parsedItem);
        }
        setLoading(false);
      }catch(error){
        setError(true);
        setLoading(false);
      }
    }, 1000);
  }, []);
  
  //Save localStorage Data
  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };

  return {
    item,
    saveItem,
    loading,
    error,
  };
}
export { useLocalStorage };

/* localStorage.removeItem('TODOS_V1');
const defaultTodos =[
  {text: 'Cut Onions', completed: true},
  {text: 'Buy things in the grocery', completed: false},
  {text: 'Study JS', completed: true},
  {text: 'Work and Work', completed: false},
  {text: 'Learn React<3 with passion', completed: true}
];
localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos)); */