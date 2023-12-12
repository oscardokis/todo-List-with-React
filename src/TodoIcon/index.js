import React from 'react';
import { ReactComponent as DeleteSVG} from './delete.svg';
import { HiMiniCheckBadge as CompleteSVG } from "react-icons/hi2";
import "./TodoIcon.css";

const IconTypes = {
  "delete": (color) => <DeleteSVG fill={color}/>,
  "complete": (color) => <CompleteSVG fill={color}/>,
};

function TodoIcon({ type, color, onClick }) {
  return (
    <span
      className={`icon-${type}`}
      onClick = {onClick}>
        {IconTypes[type](color)}

    </span>
  )
}
export { TodoIcon };