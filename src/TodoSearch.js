import React from "react";
import "./TodoSearch.css";
function TodoSearch({searchValue, setsearchValue}){
  
  return(
    <label htmlFor="TodoSearch1" className="TodoSearchLabel">
      <input id="TodoSearch1" className="TodoSearchInput" placeholder="Find out your to do HERE" value={searchValue}
      onChange={(event) => {
        setsearchValue(event.target.value);
      }}/>
    </label>
  );
}
export { TodoSearch };