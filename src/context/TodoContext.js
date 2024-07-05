import React, { createContext, useState } from 'react';

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
    const [todos, setTodos] = useState([]);
// TODO-Add Comment
    return (
        <TodoContext.Provider value={{ todos, setTodos }}>
            {children}
        </TodoContext.Provider>
    );
};
