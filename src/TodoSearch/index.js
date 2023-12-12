import React from "react";
import "./TodoSearch.css";
import { TodoContext } from "../TodoContext";
function TodoSearch(){
  const {searchValue, setsearchValue} = React.useContext(TodoContext);
  return(
    <label htmlFor="TodoSearch1" className="TodoSearchLabel">
      <input id="TodoSearch1" className="TodoSearchInput" placeholder="looking for todos?" value={searchValue}
      onChange={(event) => {
        setsearchValue(event.target.value);
      }}/>
    </label>
  );
}
export { TodoSearch };