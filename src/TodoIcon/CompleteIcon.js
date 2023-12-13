import React from "react";
import { TodoIcon } from "./";

function CompleteIcon({completed, onComplete}) {
  return (<TodoIcon
    type="complete"
    color={ completed ?  '#ce04fe' : 'white'}
    onClick = {onComplete}
  />);
}
export { CompleteIcon };