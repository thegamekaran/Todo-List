import './App.css';
import React, { useState, useEffect } from 'react'
import Form from "./components/Form"
import ToDoList from './components/ToDoList';


function App() {

  


const[inputText, setInputText]= useState("");
const [todos, setTodos] = useState([]);
const[status,setStatus] = useState("all");
const[filteredTodos, setfilteredTodos]= useState([]);


// Run once when the app start
useEffect(()=>{
  getLocalTodos();
}, []);


useEffect(()=>{
  filterHandler();
  saveLocalTodos();
}, [todos, status]);


// Functions
const filterHandler= ()=>{
  switch(status){
    case 'completed':
    setfilteredTodos(todos.filter(todo => todo.completed === true));
    break;
    case 'uncompleted':
      setfilteredTodos(todos.filter(todo => todo.completed === false));
      break;
      setfilteredTodos(todos);
      break;
  }
};



// save to local
const saveLocalTodos=()=>{
 
    localStorage.setItem('todos', JSON.stringify(todos));
  
};

const getLocalTodos=()=>{
  if(localStorage.getItem('todos')===null){
    localStorage.setItem('todos', JSON.stringify([]));
  } else{
    let todoLocal = JSON.parse(localStorage.getItem('todos'));
    setTodos(todoLocal);
  }
};



  return (
    <div className="App">
      <header> 
     <h1> Karan's Todo List</h1>
      </header>
      <Form 
      inputText={inputText}
      todos={todos} 
      setTodos={setTodos} 
      setStatus={setStatus}
      setInputText={setInputText}
      
      />
      
      <ToDoList setTodos={setTodos} todos={todos}
      filteredTodos={filteredTodos}
      /> 
    </div>
  );
}

export default App;
