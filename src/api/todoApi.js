import axios from 'axios';
import { getToken } from './auth'; // Import the getToken function

const API_URL = 'http://localhost:3004/api/todos';

export const getTodos = async () => {
    try {
        const token = await getToken(); // Await the promise
        if (!token) throw new Error('No token found');

        const response = await axios.get(API_URL, {
            headers: { Authorization: `Bearer ${token}` },
        });
        return response.data;
    } catch (error) {
        console.error('Failed to fetch todos', error);
        throw error;
    }
};


export const addTodoAPI = async (todo) => {
    try {
        const token = await getToken(); // Await the promise
        if (!token) throw new Error('No token found');

        const response = await axios.post(API_URL, { task: todo.text }, {
            headers: { Authorization: `Bearer ${token}` },
        });
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Failed to add todo', error);
        throw error; // Rethrow error for handling in the component
    }
};

export const updateTodoAPI = async (id, updatedTodo) => {
    try {
        const token = await getToken(); // Await the promise
        if (!token) throw new Error('No token found');

        const response = await axios.put(`${API_URL}/${id}`, {
            task: updatedTodo.text,
            completed: updatedTodo.completed,
        }, {
            headers: { Authorization: `Bearer ${token}` },
        });
        return response.data;
    } catch (error) {
        console.error('Failed to update todo', error);
        throw error; // Rethrow error for handling in the component
    }
};

export const deleteTodoAPI = async (id) => {
    try {
        const token = await getToken(); // Await the promise
        if (!token) throw new Error('No token found');

        const response = await axios.delete(`${API_URL}/${id}`, {
            headers: { Authorization: `Bearer ${token}` },
        });
        return response.data;
    } catch (error) {
        console.error('Failed to delete todo', error);
        throw error; // Rethrow error for handling in the component
    }
};
