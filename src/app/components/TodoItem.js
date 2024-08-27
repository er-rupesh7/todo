'use client'
import React from 'react';

export default function TodoItem({ todo, index, toggleComplete, removeTodo }) {
  return (
    <div style={styles.todoItem}>
      <span 
        style={{
          textDecoration: todo.completed ? 'line-through' : 'none',
          color: todo.completed ? '#777' : '#000'
        }}
        onClick={() => toggleComplete(index)}
      >
        {todo.text}
      </span>
      <button style={styles.removeButton} onClick={() => removeTodo(index)}>X</button>
    </div>
  );
}

const styles = {
  todoItem: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px 15px',
    backgroundColor: '#f9f9f9',
    borderRadius: '5px',
    marginBottom: '10px',
  },
  removeButton: {
    backgroundColor: 'red',
    border: 'none',
    borderRadius: '50%',
    color: 'white',
    cursor: 'pointer',
    padding: '5px 10px',
  },
};