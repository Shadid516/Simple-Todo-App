import React, { useRef, useContext } from 'react';
import { TodoContext } from '../context/TodoContext';
import { useHistory } from 'react-router-dom';

const AddTodo = () => {
    const { todos, setTodos } = useContext(TodoContext);
    const todoInputRef = useRef();
    const history = useHistory();
// TODO replace history with something else we learned
    const handleAddTodo = () => {
        const newTodo = todoInputRef.current.value;
        if (newTodo.trim()) {
            setTodos([...todos, newTodo]);
            todoInputRef.current.value = '';
            history.push('/');
        }
    };

    return (
        <div>
            <h1>Add Todo</h1>
            <input type="text" ref={todoInputRef} placeholder="Enter a task..." />
            <button onClick={handleAddTodo}>Add Task</button>
        </div>
    );
};

export default AddTodo;
