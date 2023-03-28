import React from 'react';

const ToDoListItem = ({ itemText }) => {
  return (
    <div className="ToDoListItem">
      {itemText}
    </div>
  );
}

export default ToDoListItem;