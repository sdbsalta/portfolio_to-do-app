import React, { useState } from 'react';
import { ToDoForm } from './ToDoForm';
import { ToDo } from './ToDo';
import { v4 as uuidv4 } from 'uuid';
import { EditToDoForm } from './EditToDo';

export const ToDoWrapper = () => {
  const [todos, setTodos ] = useState([]);

  const addToDo = todo => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false }
    ]);
  };

  const toggleComplete = id => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const editTodo = (value, id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, task: value, isEditing: false } : todo
    ));
  };

  const toggleEdit = id => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
    ));
  };

  return (
    <div className='ToDoWrapper'>
      <h1>Your to-do-list</h1>
      <ToDoForm addToDo={addToDo} />
      {todos.map(todo => (
        todo.isEditing ? (
          <EditToDoForm 
            task={todo} 
            key={todo.id} 
            editTodo={editTodo} 
          />
        ) : (
          <ToDo 
            task={todo} 
            key={todo.id} 
            toggleComplete={toggleComplete} 
            deleteToDo={deleteTodo} 
            editToDo={toggleEdit} 
          />
        )
      ))}
      <p className="footer">Created by Sophia Salta<br></br>Check out more projects here</p>
    </div>
  );
};
