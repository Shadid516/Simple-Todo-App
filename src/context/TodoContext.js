import React, { createContext, useState, useEffect } from 'react';
import { getTodos, addTodoAPI, updateTodoAPI, deleteTodoAPI } from '../api/todoApi.js'; // API methods
import { getToken } from '../api/auth'; // Token management

export const TodoContext = createContext({
    todos: [],
    addTodo: () => { },
    updateTodo: () => { },
    deleteTodo: () => { },
});

export const TodoProvider = ({ children }) => {
    const [todos, setTodos] = useState([]);

    // Fetch todos from the backend when the component mounts
    useEffect(() => {
        const fetchTodos = async () => {
            try {
                const token = await getToken();
                if (token) {
                    const todosData = await getTodos();
                    setTodos(todosData);
                }
            } catch (error) {
                console.error('Failed to fetch todos', error);
            }
        };
        fetchTodos();
    }, []);

    const addTodo = async (newText) => {
        try {
            const newTodo = await addTodoAPI({ text: newText, completed: false });
            setTodos((prevTodos) => [...prevTodos, newTodo]);
        } catch (error) {
            console.error('Failed to add todo', error);
        }
    };

    const updateTodo = async (id, updatedText) => {
        try {
            const updatedTodo = await updateTodoAPI(id, { text: updatedText });
            setTodos((prevTodos) =>
                prevTodos.map((todo) => (todo.id === id ? updatedTodo : todo))
            );
        } catch (error) {
            console.error('Failed to update todo', error);
        }
    };

    const deleteTodo = async (id) => {
        try {
            await deleteTodoAPI(id);
            setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
        } catch (error) {
            console.error('Failed to delete todo', error);
        }
    };

    return (
        <TodoContext.Provider value={{ todos, addTodo, updateTodo, deleteTodo }}>
            {children}
        </TodoContext.Provider>
    );
};
