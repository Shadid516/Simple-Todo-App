import React, { createContext, useState } from 'react';
export const TodoContext = createContext({
    todos: [],
    setTodos: [],
    addTodo: () => { },
    updateTodo: () => { },
    deleteTodo: () => { },
});
export const TodoProvider = ({ children }) => {
    //const [todos, setTodos] = useState([{ id: 1, text: 'Talk with an old friend' }, { id: 2, text: 'Call mom' }, { id: 3, text: 'Do the dishes' }, { id: 4, text: 'Do laundry' }, { id: 5, text: 'Check if Dr. posted out grades' }, { id: 6, text: 'Cry when react state does not update as expected' }, { id: 7, text: 'Start working on my react project' }, { id: 8, text: 'Today Meetup at 5PM' }, { id: 9, text: 'Drink water' }]);
    const [todos, setTodos] = useState([]);
    //{ id: 1, text: 'testtext', completed: false }
    const addTodo = (newText) => {
        // Add logic to create a new todo object with id and text
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
        // Implement logic to update the todo with the given id
        setTodos(prevTodos =>
            prevTodos.map(todo => (todo.id === id ? { ...todo, text: updatedText } : todo))
        );
    };
    const deleteTodo = (id) => {
        // Implement logic to delete the todo with the given id
        console.log('todo deleted');
        setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
    };
    return (
        <TodoContext.Provider value={{ todos, addTodo, updateTodo, deleteTodo }}>
            {children}
        </TodoContext.Provider>
    );
};
