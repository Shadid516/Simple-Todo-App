import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import TodoAdd from './pages/TodoAdd';
import Login from './pages/Login';
import Register from './pages/Register';
import Navbar from './components/Navbar';
import { TodoProvider } from './context/TodoContext';
import ProtectedRoute from './components/ProtectedRoute';
import './App.css';

function App() {
  return (
    <div className='App'>
      <TodoProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
            <Route path="/add-todo" element={<ProtectedRoute><TodoAdd /></ProtectedRoute>} />
          </Routes>
        </BrowserRouter>
      </TodoProvider>
    </div>
  );
}

export default App;
