import React, { useContext, useEffect } from 'react';
import { TodoContext } from '../context/TodoContext';

const Home = () => {
    const { todos } = useContext(TodoContext);

    useEffect(() => {
        console.log('Todos:', todos);
    }, [todos]);

    return (
        <div>
            <h1>Todo List</h1>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>{todo}</li>
                ))}
            </ul>
        </div>
    );
};

export default Home;
