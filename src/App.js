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
    },[todos,status]
  );
  
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
