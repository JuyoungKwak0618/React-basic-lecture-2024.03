import { useEffect, useState } from 'react';
import './App.css';
import Header from '../Todo_components/Header';
import TodoList from '../Todo_components/TodoList';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const filters = ['all', 'active', 'completed'];
  const [filter, setFilter] = useState('all');
  return (
   <div>
    <Header filters={filters} filter={filter} onFilterChange={setFilter} />
    <div className="todo-lists">
    <TodoList filter={filter} />
    </div>
  </div>
  );
}
export default App;
