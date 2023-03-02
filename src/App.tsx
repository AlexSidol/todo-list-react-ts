import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import AddTodo from './components/AddToDo';
import { IItem } from './types/todo';
import TodoList from './components/ToDoList';


const App:React.FC=()=> {
  const [todos, setTodos] = useState<IItem[]>([]);

  const numberToDo = ()=>{
let sum = 0;

for (let i = 0; i <= todos.length; i += 1) {
  sum += 1;
}
    return sum;
  }

  function todoAddHandler (todo: IItem) {
    setTodos((prevTodos) => {
      return [
        ...prevTodos,
        {
          id: numberToDo(), 
          title: todo.title
        }
      ]
    })
  }

  function todoRemoveHandler (id: number): void {
    setTodos((prevTodos) => {
      return prevTodos.filter((item) => {
        return item.id !== id;
      });
    })
  }
  return (
    <div className="App">

        <header className="App-header">
        <AddTodo onAddTodo={todoAddHandler} />
      <TodoList onRemoveTodo={todoRemoveHandler} todos={todos}/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;


