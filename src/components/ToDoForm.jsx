//ToDoForm.jsx

import React, { useState } from 'react'

export const ToDoForm = ( {addToDo} ) => {
  const [value, setValue] = useState("")

  const handleSubmit = e => {
    e.preventDefault();
    addToDo(value);
    setValue("")
  }

  return (
    <form className="ToDoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        value={ value }
        placeholder="What will you focus on today?"
        onChange={(e) => setValue(e.target.value)} 
      />
      <button type="submit" className="todo-btn">
        Add task
      </button>
    </form>
  )
}
