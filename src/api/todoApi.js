// Updated frontend todoApi.js

import axios from 'axios';

// Just for the sake of this project and testing the default url is local
const API_URL = 'http://localhost:3004/api/todos';

export const getTodos = async () => {
    const response = await axios.get(API_URL, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });
    return response.data;
};

export const addTodoAPI = async (todo) => {
    const response = await axios.post(API_URL, { task: todo.text }, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });
    console.log(response.data);
    return response.data;
};

export const updateTodoAPI = async (id, updatedTodo) => {
    const response = await axios.put(`${API_URL}/${id}`, {
        task: updatedTodo.text,
        completed: updatedTodo.completed,
    }, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });
    return response.data;
};

export const deleteTodoAPI = async (id) => {
    const response = await axios.delete(`${API_URL}/${id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });
    return response.data;
};
