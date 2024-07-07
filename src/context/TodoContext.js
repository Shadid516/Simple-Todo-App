import React, { createContext, useState } from 'react';
export const TodoContext = createContext({
    todos: [],
    setTodos: [],
    addTodo: () => { },
    updateTodo: () => { },
    deleteTodo: () => { },
});
export const TodoProvider = ({ children }) => {
    const [todos, setTodos] = useState([]);
    const addTodo = (newText) => {
        // logic to create a new task object with unique id and text
        const textArray = Array.isArray(newText) ? newText : [newText];
        //Validates that input is array
        let delay = 0;
        textArray.filter((newText) => newText.trim()) // Filter empty strings
            .forEach((newText, index) => {
                setTimeout(() => {
                    const newTodo = {
                        id: Date.now(), // Generate a unique id
                        text: newText,
                        completed: false,
                    };
                    setTodos((prevTodos) => [...prevTodos, newTodo]);
                }, delay);

                delay += 20; // Increase delay for each item to avoid duplicate ids
            });
    };
    const updateTodo = (id, updatedText) => {
        // Implement logic to update the task with the given id
        setTodos(prevTodos =>
            prevTodos.map(todo => (todo.id === id ? { ...todo, text: updatedText } : todo))
        );
    };
    const deleteTodo = (id) => {
        // Implement logic to delete the task with the given id
        console.log('todo deleted');
        setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
    };
    return ( //to do memoize objects
        <TodoContext.Provider value={{ todos, addTodo, updateTodo, deleteTodo }}>
            {children}
        </TodoContext.Provider>
    );
};
