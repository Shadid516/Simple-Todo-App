import React, { createContext, useState } from 'react';

export const TodoContext = createContext({
    todos: [],
    addTodo: () => { },
    updateTodo: () => { },
    deleteTodo: () => { },
});

export const TodoProvider = ({ children }) => {
    const [todos, setTodos] = useState([]);

    const addTodo = (newText) => {
        // Add logic to create a new todo object with id and text
        if (newText.trim()) {
            const newTodo = {
                id: Date.now(), // Generate a unique id
                text: newText,
                completed: false, // Initially mark as not completed
            };
            setTodos([...todos, newTodo]);
        };

        const updateTodo = (id, updatedText) => {
            // Implement logic to update the todo with the given id
            setTodos(prevTodos =>
                prevTodos.map(todo => (todo.id === id ? { ...todo, text: updatedText } : todo))
            );
        };

        const deleteTodo = (id) => {
            // Implement logic to delete the todo with the given id
            setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
        };

        return ( // TODO remove setTodos when everything else functional
            <TodoContext.Provider value={{ todos, setTodos, addTodo, updateTodo, deleteTodo }}>
                {children}
            </TodoContext.Provider>
        );
    };
};