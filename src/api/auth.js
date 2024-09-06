import axios from 'axios';

const API_URL = 'http://localhost:3004/api/users'; // Base URL for user-related endpoints

let isTokenBeingSet = false; // Flag to indicate if the token is currently being set
let tokenQueue = []; // Queue to store pending token requests

// Generic function to handle token-related operations
const handleTokenOperation = async (operation) => {
    if (isTokenBeingSet) {
        await new Promise((resolve) => {
            tokenQueue.push({ resolve });
        });
    }
    try {
        return await operation();
    } catch (error) {
        throw error;
    }
};

// Function to set the token in localStorage
const setToken = (token) => {
    isTokenBeingSet = true;
    localStorage.setItem('token', token);
    isTokenBeingSet = false;
    // Process any pending token requests
    while (tokenQueue.length > 0) {
        const { resolve } = tokenQueue.shift();
        resolve();
    }
};

// Function to get the token from localStorage
const getToken = async () => {
    const maxRetries = 5; // Maximum number of retries
    const retryDelay = 40; // Delay between retries in milliseconds

    let token = await handleTokenOperation(() => Promise.resolve(localStorage.getItem('token')));
    let retries = 0;

    while (!token && retries < maxRetries) {
        await new Promise((resolve) => setTimeout(resolve, retryDelay)); // Wait before retrying
        token = await handleTokenOperation(() => Promise.resolve(localStorage.getItem('token')));
        retries++;
    }

    if (!token) {
        console.error('Token not found after maximum retries');
        throw new Error('Token not found');
    }

    return token;
};



// Function to remove the token from localStorage
const removeToken = async () => {
    await handleTokenOperation(() => {
        localStorage.removeItem('token');
        return Promise.resolve();
    });
};

// Function to handle login and store the token
export const login = async (username, password) => {
    try {
        const response = await axios.post(`${API_URL}/login`, { username, password });
        const token = response.data.token;
        setToken(token); // Store the token
        return response.data;
    } catch (error) {
        throw new Error('Login failed');
    }
};

// Function to validate the token
export const validateToken = async () => {
    try {
        const token = await getToken();
        if (!token) throw new Error('No token found');

        await axios.get('http://localhost:3004/api/validate-token', {
            headers: { Authorization: `Bearer ${token}` },
        });
        return true;
    } catch (error) {
        return false;
    }
};

export const logout = async () => {
    await removeToken();
};

// Export functions
export { setToken, getToken, removeToken };
