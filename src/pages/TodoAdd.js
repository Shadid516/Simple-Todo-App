import React, { useRef, useContext } from 'react';
import { TodoContext } from '../context/TodoContext';
//import { useNavigate } from 'react-router-dom';
import StyleSheet from './todoadd.module.css';

const TodoAdd = () => {
    const { addTodo, todos } = useContext(TodoContext);
    const todoInputRef = useRef();
    //const navigate = useNavigate();
    // TODO replace history with something else we learned
    const handleAddTodo = () => {
        const newTodo = todoInputRef.current.value;
        addTodo([newTodo]);
        console.log("addTodo(newTodo) done");
        todoInputRef.current.value = '';
        //navigate('/'); //kept temporarily

    };

    function devpopulatelist() {
        addTodo(['Talk with an old friend', 'Call mom', 'Do the dishes', 'Do laundry', 'Check if Dr. posted out grades', 'Cry when react state does not update as expected', 'Start working on my react project', 'Today Meetup at 5PM', 'Drink water']);
    }
    return (
        <div className={StyleSheet.todo}>
            <h1>Add your tasks</h1>
            <p>Try to breakdown your large tasks into manageable chunks, pace yourself, and happy tasking!</p>
            <input type="text" ref={todoInputRef} placeholder="Enter a task..." />
            <button onClick={handleAddTodo}>Add Task</button>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>{todo.text}
                    </li>
                ))}
            </ul>
            <button onClick={() => devpopulatelist()}>Dev: Populate Task List</button>
        </div>
    );
};

export default TodoAdd;

