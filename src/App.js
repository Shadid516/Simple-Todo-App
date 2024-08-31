import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import TodoAdd from './pages/TodoAdd';
import Login from './pages/Login';
import Navbar from './components/navbar';
import React from 'react';
import { TodoProvider } from './context/TodoContext';
import ProtectedRoute from './components/ProtectedRoute';

// Dummy authentication check function
const useAuth = () => !!localStorage.getItem('token');

function App() {
  const isAuthenticated = useAuth();

  return (
    <div className='App'>
      <TodoProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
              <Route path="/" element={<Home />} />
              <Route path="/add-todo" element={<TodoAdd />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </TodoProvider>
    </div>
  );
}

export default App;
