import React, { useContext, useEffect } from 'react';
import { TodoContext } from '../context/TodoContext';

const Home = () => {
    const { todos, updateTodo, deleteTodo } = useContext(TodoContext);

    useEffect(() => { //log the list of todos to the console whenever it changes
        console.log('Todos:', todos);
    }, [todos]); 

    return (
        <div>
            <h1>Todo List</h1>
            <ul>
                {todos.map((todo, index) => (
                    <li key={todo.id}>{todo}
                        <button onClick={updateTodo(todo.id,'Stub text to test for update')}>Edit</button>
                        <button onClick={deleteTodo(todo.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Home;
