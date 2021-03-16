import React from 'react'

const Form =({  setinputText,todos,setTodos,inputText,setStatus})=> {
    const inputHandler=(e)=>{
        setinputText(e.target.value);
       
        
    }
    const eventHandler=(e)=>{
        e.preventDefault();
        setTodos([...todos,{text:inputText,completed:false,id:Math.random()*1000}])
    }
    const statusHandler=(ev)=>{
        setStatus(ev.target.value);
    }
    return (
     <form>
    <input onChange={inputHandler} type="text" className="todo-input" />
    <button onClick={eventHandler} className="todo-button" type="submit">
    <i className="fas fa-plus-square"></i>
    </button>
    <div className="select">
    <select name="todos" onChange={statusHandler} className="filter-todo">
        <option value="all">All</option>
        <option value="completed">Tapped</option>
        <option value="uncompleted">Not-Tapped</option>
    </select>
    </div>
</form>
        
    )
}

export default Form;
