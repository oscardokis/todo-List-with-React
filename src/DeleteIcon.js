import React from "react";
import { TodoIcon } from './TodoIcon';
function DeleteIcon({completed, onDelete}) {
  return (<TodoIcon
    type="delete"
    color={ completed ?  'red' : '#3B3126'}
    onClick = {onDelete}
  />);
}
export { DeleteIcon };