import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AddTodo from './pages/AddTodo';
import { TodoProvider } from './context/TodoContext';
import Navbar from './components/navbar';
// TODO ask why 'app' is given as an arrow function
const App = () => {
  return (
    <TodoProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/add-todo" element={<AddTodo />} />
        </Routes>
      </Router>
    </TodoProvider>
  );
};

export default App;

