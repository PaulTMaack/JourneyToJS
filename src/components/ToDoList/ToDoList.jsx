import React from "react";

import ToDoListItem from "../ToDoListItem/ToDoListItem";

import "./ToDoList.css"


const ToDoList = ({ listData, clearList, toggleCheck, deleteItem }) => {

  const listDataExistsAndIsNotEmpty = (data) =>
    data &&
    Array.isArray(data) &&
    data.length > 0

  return (
    <div className="ToDoList">

      {/* <button
        onClick={clearList}
      >
        Clear The To Do List!
      </button> */}
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
            deleteItem={deleteItem}
            key={item.id}
            // isChecked={item.isChecked}
            item={item}
            // itemText={item.task}
            toggleCheck={toggleCheck}
          />
        ))
      }
    </div>
  )
}

export default ToDoList;