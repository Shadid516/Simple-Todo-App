import React, { useRef, useContext } from 'react';
import { TodoContext } from '../context/TodoContext';
import { useNavigate } from 'react-router-dom';
import Home from './Home';

const AddTodo = () => {
    const { todos, setTodos } = useContext(TodoContext);
    const todoInputRef = useRef();
    //const navigate = useNavigate();
    // TODO replace history with something else we learned
    const handleAddTodo = () => {
        const newTodo = todoInputRef.current.value;
        if (newTodo.trim()) {
            setTodos([...todos, newTodo]);
            todoInputRef.current.value = '';
            //navigate('/') //kept temporarily
        }
    };

    function handleDeleteToDo(index) {
        // Create a copy of the todos array
        const updatedTodos = [...todos];
        // Remove the todo at the specified index
        updatedTodos.splice(index, 1);
        // Update the state with the new array
        setTodos(updatedTodos);
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

