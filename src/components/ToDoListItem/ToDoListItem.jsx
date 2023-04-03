import React from 'react';
import './ToDoListItem.css'

const ToDoListItem = ({ itemText, isChecked = false }) => {
  return (
    <div className="ToDoListItem">
      <div className="ToDoListItemText">
        {itemText}
      </div>

      <div
        className={`ToDoListItemCheck ${isChecked ? "Checked" : "Unchecked"}`}
      >
        &nbsp;
      </div>
    </div>
  );
}

export default ToDoListItem;