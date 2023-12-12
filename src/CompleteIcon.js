import React from "react";
import { TodoIcon } from "./TodoIcon";

function CompleteIcon({completed, onComplete}) {
  return (<TodoIcon
    type="complete"
    color={ completed ?  'green' : '#3B3126'}
    onClick = {onComplete}
  />);
}
export { CompleteIcon };