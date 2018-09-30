//no stated needed functional component
import React from 'react';

//destructuring
const Todos = ({todos, deleteTodo}) =>{
    //condition ? (if true) : (if false)
    const todoList = todos.length ? (
        todos.map(todo=>{
            return (
                <div className="collection-item" key={todo.id}>
                    <span onClick={()=> {deleteTodo(todo.id)}}>{todo.content}</span>
                </div>
            )
    })
    
    ) : ( <p className="center">No todos </p>)

    return (

    <div className="todos collection">
        {todoList}

    </div>
    )
}

export default Todos;