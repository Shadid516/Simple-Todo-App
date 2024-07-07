import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import TodoAdd from './pages/TodoAdd';
import Navbar from './components/navbar';
import React from 'react';
import { TodoProvider } from './context/TodoContext';

function App() {
  return (
    <div className='App'>
      <TodoProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/add-todo" element={<TodoAdd />} />
          </Routes>
        </BrowserRouter>
      </TodoProvider>
    </div>

  );
}

export default App;
