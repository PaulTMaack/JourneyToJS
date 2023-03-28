import React from "react";

import ToDoListItem from "../ToDoListItem/ToDoListItem";

import "./ToDoList.css"

// const listData = [
//   "Whatever",
//   "For",
//   "A",
//   "Few",
//   "Things",
// ]

const ToDoList = ({ listData, clearList }) => {

  const listDataExistsAndIsNotEmpty = (data) =>
    data &&
    Array.isArray(data) &&
    data.length > 0

  return (
    <div className="ToDoList">

      <button
        onClick={clearList}
      >
        Clear The To Do List!
      </button>

      I am the To Do List!
      {
        listDataExistsAndIsNotEmpty(listData) && listData.map(item => (
          <ToDoListItem
            itemText={item}
            key={item}
          />
        ))
      }
    </div>
  )
}

export default ToDoList;