import React, { useRef, useContext } from 'react';
import { TodoContext } from '../context/TodoContext';
//import { useNavigate } from 'react-router-dom';
import Home from './Home';

const AddTodo = () => {
    const { addTodo } = useContext(TodoContext);
    const todoInputRef = useRef();
    //const navigate = useNavigate();
    // TODO replace history with something else we learned
    const handleAddTodo = () => {
        const newTodo = todoInputRef.current.value;
        addTodo(newTodo);
        todoInputRef.current.value = '';
        //navigate('/') //kept temporarily

    };



    return (
        <div>
            <h1>Add Todo</h1>
            <input type="text" ref={todoInputRef} placeholder="Enter a task..." />
            <button onClick={handleAddTodo}>Add Task</button>
            <Home />
        </div>
    );
};

export default AddTodo;

