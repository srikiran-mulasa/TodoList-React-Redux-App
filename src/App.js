import React from 'react';

// import Calendar from "./calander/Calander";
import './App.css';
import TodoForm from './components/todo_form/TodoForm';
import TodoListItem from './components/todo_list_item/TodoListItem';

function App() {
  return (
    <div >
      {/* <Calendar /> */}
      <TodoForm />
      <TodoListItem />
    </div>
  );
}

export default App;
