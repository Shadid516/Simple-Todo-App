import React, { useRef, useContext, useEffect } from 'react';
import { TodoContext } from '../context/TodoContext';
import StyleSheet from './todoadd.module.css';

const TodoAdd = () => {
    const { addTodo, todos } = useContext(TodoContext);
    const todoInputRef = useRef();

    useEffect(() => {
        console.log('Current Todos:', todos);
    }, [todos]);

    const handleAddTodo = () => {
        const newTodoText = todoInputRef.current.value;
        if (newTodoText.trim()) { // Check if the input is not empty
            console.log('Adding Todo:', newTodoText);
            addTodo(newTodoText);
            todoInputRef.current.value = '';
        }
    };

    const devpopulatelist = () => {
        console.log('Populating Todo List');
        addTodo([
            'Talk with an old friend', 'Call mom', 'Do the dishes', 'Do laundry',
            'Check if Dr. posted out grades', 'Cry when react state does not update as expected',
            'Start working on my react project', 'Today Meetup at 5PM', 'Drink water'
        ]);
    };

    return (
        <div className={StyleSheet.todo}>
            <h1>Add your tasks</h1>
            <p>Try to break down your large tasks into manageable chunks, pace yourself, and happy tasking!</p>
            <input type="text" ref={todoInputRef} placeholder="Enter a task..." />
            <button onClick={handleAddTodo}>Add Task</button>
            <ul>
                {todos.length === 0 ? (
                    <p>No tasks available. Please add some tasks.</p>
                ) : (
                    todos.map((todo) => (
                        <li key={todo.id}>{todo.task}</li>
                    ))
                )}
            </ul>
            <button onClick={devpopulatelist}>Dev: Populate Task List</button>
        </div>
    );
};

export default TodoAdd;
