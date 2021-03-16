import React,{useState,useEffect} from 'react'
import './App.css';
import Form from'./components/form';
import TodoList from './components/todoList'
function App() {
  const [inputText,setinputText]=useState("");
  const [todos,setTodos]=useState([]);
  const [status,setStatus]=useState("all");
  const [filteredTodos,setFilteredTodos]=useState([]);
  useEffect(()=>{
    getLocaltodos();},[])
  useEffect(()=>{
    const filterHandler=()=>{
      switch(status)
      {
        case 'completed':
          setFilteredTodos(todos.filter(todo=> todo.completed===true))
          break;
        case 'uncomplete':
          setFilteredTodos(todos.filter(todo=>todo.completed===false))
          break;
        default:
          setFilteredTodos(todos);
          break;
      }
  
    }
    filterHandler()
    savelocalTodos()
    },[todos,status]
  );
  const savelocalTodos=()=>{
    if(localStorage.getItem('todos')===null)
    {
      localStorage.setItem('todos',JSON.stringify([]));
    }
    else
    {
      localStorage.setItem('todos',JSON.stringify(todos));
    }
  }
  const getLocaltodos=()=>{
    if(localStorage.getItem('todos')===null)
    {
      localStorage.setItem('todos',JSON.stringify([]));
    }
    else
    {
      let todoLocal=JSON.parse(localStorage.getItem('todos'));
      setTodos(todoLocal);
    }
  }
  return (
    <div className="App">
     <header>
     <h1>Tapping List</h1>
     </header>
     <Form todos ={todos} setTodos={setTodos} inputText={inputText} setinputText={setinputText} setStatus={setStatus} />
     <TodoList setTodos={setTodos} filteredTodos={filteredTodos} todos={todos}/>
     
    </div>
  );
}

export default App;
