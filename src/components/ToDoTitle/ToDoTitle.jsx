import React from "react";
import {
  HiCheckCircle,
} from "react-icons/hi2"
import "./ToDoTitle.css"

const ToDoTitle = () => {
  return (
    <div className="ToDoTitle">
      <div className="logo-wrapper">
        <HiCheckCircle />
      </div>
      <h1>
        Welcome! You have no mail!
      </h1>

    </div>
  )
}

export default ToDoTitle;