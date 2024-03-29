import { useEffect, useState } from 'react';
import './App.css';
import Header from '../Todo_components/Header';
import TodoList from '../Todo_components/TodoList';


function App() {

  return (
   <div>
    <Header />
    <TodoList />
  </div>
  );
}
export default App;
