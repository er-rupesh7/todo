'use client'

import React from 'react';
import TodoItem from './TodoItem';

export default function TodoList({ todos, toggleComplete, removeTodo }) {
  return (
    <div style={styles.todoList}>
      {!(todos.length>0) ? 
      <>
      <h2 style={{color:'lightgreen'}}>You don't have any task</h2>
      <p>Add some task you want to track</p>
      </> 
      : <>
      <h2 style={{color:'crimson',margin:'10px 0'}}>You have {todos.length} {todos.length>1? <>tasks</> :<>task</>} to finish.</h2>
      </>}

      {todos.map((todo, index) => (
        
        <TodoItem
          key={index}
          index={index}
          todo={todo}
          toggleComplete={toggleComplete}
          removeTodo={removeTodo}
        />
      ))}
    </div>
  );
}

const styles = {
  todoList: {
    maxWidth: '500px',
    margin: '20px auto',
  },
};