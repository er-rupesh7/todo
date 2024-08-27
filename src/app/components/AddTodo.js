'use client'
import React, { useState } from 'react';

export default function AddTodo({ addTodo }) {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim()) {
      addTodo(value);
      setValue('');
    }
  };

  return (
    <div style={{ position: 'sticky', top: '0px', zIndex: 1000, backgroundColor: 'rgba(0,0,0,0)', padding: '10px 0' }}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Add a new task"
          style={{fontSize:"110%",fontWeight:'bold',color:'teal',...styles.input}}
        />
        <button type="submit" style={styles.addButton}> + Add</button>
      </form>
    </div>
  );
}

const styles = {
  form: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '20px',
  },
  input: {
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    flex: 1,
    marginRight: '10px',
  },
  addButton: {
    padding: '10px 20px',
    borderRadius: '5px',
    backgroundColor: 'teal',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    fontSize: '110%',
    fontWeight: 'bolder',
  },
};