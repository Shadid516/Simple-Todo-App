import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import AddTodo from './components/AddTodo';
import { TodoProvider } from './context/TodoContext';
// TODO ask why 'app' is given as an arrow function
const App = () => {
  return (
    <TodoProvider>
      <BrowserRouter>
        {/* <nav> */}
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/add-todo">Add Todo</Link></li>
        </ul>
        {/* </nav> */}
        <Routes>
          <Route exact path="/" component={<Home />} />
          <Route path="/add-todo" component={<AddTodo />} />
        </Routes>
      </BrowserRouter>
    </TodoProvider>
  );
};

export default App;

