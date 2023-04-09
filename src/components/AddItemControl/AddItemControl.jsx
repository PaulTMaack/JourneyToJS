import React, { useState } from "react";

import "./AddItemControl.css"

const AddItemControl = ({ addItem }) => {

  const [newItem, setNewItem] = useState("")

  const submitHandler = () => {
    addItem(newItem)
  }

  return (
    <div className="AddItem">
      <input
        className="AddItem-Input"
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button
        className="AddItem-Button"
        onClick={submitHandler}
      >
        Add ToDo
      </button>
    </div>
  )
}


export default AddItemControl;
