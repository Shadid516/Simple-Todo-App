import React, { useContext, useEffect } from 'react';
import { TodoContext } from '../context/TodoContext';

const Home = () => {
    const { todos } = useContext(TodoContext);

    useEffect(() => { //log the list of todos to the console whenever it changes
        console.log('Todos:', todos);
    }, [todos]); 

    return (
        <div>
            <h1>Todo List</h1>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>{todo}</li>
                    <button key={index} onClick={handleDeleteTodo}>Delete</button>
                ))}
            </ul>
        </div>
    );
};

export default Home;
