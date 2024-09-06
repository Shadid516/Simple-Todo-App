import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:3004/api/users/register', { username, password });
            console.log('Registration successful:', response.data);
            navigate('/login'); // Redirect to login page after successful registration
        } catch (err) {
            if (err.response && err.response.status === 400) {
                setError('Username already exists or invalid input');
            } else {
                setError('An error occurred. Please try again.');
            }
        }
    };

    return (
        <div>
            <h2>Register</h2>
            <form onSubmit={handleRegister}>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Register</button>
                {error && <p>{error}</p>}
            </form>
            <button onClick={() => navigate('/login')}>Already have an account? Login</button>
        </div>
    );
}

export default Register;
