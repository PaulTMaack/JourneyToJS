import React from 'react';
import './ToDoListItem.css'

const ToDoListItem = ({
  itemText,
  isChecked = false,
  item,
  toggleCheck
}) => {
  return (
    <div
      className="ToDoListItem"
      onClick={() => toggleCheck(item)}
    >
      <div className="ToDoListItemText">
        {item.task}
      </div>

      <div
        className={`ToDoListItemCheck ${item.isChecked ? "Checked" : "Unchecked"}`}
      >
        &nbsp;
      </div>
    </div>
  );
}

export default ToDoListItem;