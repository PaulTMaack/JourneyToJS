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
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button
        onClick={submitHandler}
      >
        Add ToDo
      </button>
    </div>
  )
}

export default AddItemControl;
