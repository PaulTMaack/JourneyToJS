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

const ToDoList = ({ listData, clearList, toggleCheck }) => {

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
      {/*
{
      "id": 1,
      "task": "Pet Cat",
      "isChecked": false,
      "createdAt": "2023-04-02T23:22:20.459Z",
      "updatedAt": "2023-04-02T23:22:20.459Z"
}
  */}
      {
        listDataExistsAndIsNotEmpty(listData) && listData.map(item => (
          <ToDoListItem
            toggleCheck={toggleCheck}
            item={item}
            itemText={item.task}
            key={item.id}
            isChecked={item.isChecked}
          />
        ))
      }
    </div>
  )
}

export default ToDoList;