import React, { useState, useEffect } from 'react';

export const EditToDoForm = ({ editTodo, task }) => {
  const [value, setValue] = useState(task.task);

  useEffect(() => {
    setValue(task.task); 
  }, [task]);

  const handleSubmit = (e) => {
    e.preventDefault();
    editTodo(value, task.id);  
  };

  return (
    <form className="ToDo" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        value={value}
        placeholder="Update task"
        onChange={(e) => setValue(e.target.value)} 
      />
      <button type="submit" className="todo-btn">
        Update task
      </button>
    </form>
  );
};