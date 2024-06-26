import { useState } from 'react';
import '../apps/App.css';
import { FaRegTrashAlt } from "react-icons/fa";
import { v4 as uuidv4} from 'uuid';
import AddTodo from './AddTodo';


export default function Todo({todo, onUpdate, onDelete}) {
  const {id, work, status} = todo;
  
  const handleChange = e => {
    const status = e.target.checked ? 'completed' : 'active';
    onUpdate({...todo, status});
  }
  const handleDelete = () => onDelete(todo);
  return (
        <li>
          <input type='checkbox' id={id} checked={todo.status === 'completed'}
            onChange={handleChange} />
            <label htmlFor={id}>{work}</label>
            <button onClick={handleDelete}><FaRegTrashAlt /></button>
        </li>
  );
}

