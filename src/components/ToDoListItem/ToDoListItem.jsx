import React from 'react';
import './ToDoListItem.css'
import {
  HiTrash,
} from "react-icons/hi2";

const ToDoListItem = ({

  deleteItem,
  // isChecked = false,
  item,
  // itemText,
  toggleCheck,
}) => {
  return (
    <div
      className="ToDoListItem"
      onClick={() => toggleCheck(item)}
    >
      <div className={`ToDoListItemText ${item.isChecked ? "Checked" : "Unchecked"}`}>

        {item.task}
      </div>

      <div className="ToDoListItemControls">
        <div className="ToDoListItemDelete"
          onClick={() => deleteItem(item)}
        >
          <HiTrash />
        </div>
        {/* <div
          className={`ToDoListItemCheck ${item.isChecked ? "Checked" : "Unchecked"}`}
        >
          &nbsp;
        </div> */}

      </div>
    </div>
  );
}

export default ToDoListItem;