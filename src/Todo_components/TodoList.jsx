import { useState } from 'react';
import '../apps/App.css';
import { FaRegTrashAlt } from "react-icons/fa";
import { v4 as uuidv4} from 'uuid';
import AddTodo from './AddTodo';
import Todo from './Todo';


export default function TodoList() {
  const [todos, setTodos] = useState([
    {id:uuidv4(),work:'공부하기', status:'active'},
    {id:uuidv4(),work:'청소하기', status:'active'},
  ]);
  const handleUpdate = updated =>
   setTodos(todos.map(todo => (todo.id=== updated.id) ? updated : todo));
    
  const handleDelete = deleted => 
    setTodos(todos.filter(todo => todo.id != deleted.id));
  
  const handleAdd = todo => setTodos([...todos, todo]);


  return (
    <div className='card'>
      <ul>TO do List
        {
          todos.map(todo => (
            <Todo todo={todo} onUpdate={handleUpdate} onDelete={handleDelete} />
          ))
        }
      </ul>
      <AddTodo onAdd={handleAdd}/>
    </div>
  );
}

