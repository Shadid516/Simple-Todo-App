import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
      </header>
    </div>
  );
}

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from './components/Home';
import AddTodo from './components/AddTodo';
import { TodoProvider } from './context/TodoContext';
// TODO ask why 'app' is given as an arrow function
const App = () => {
  return (
    <TodoProvider>
      <Router>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/add-todo">Add Todo</Link></li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/add-todo" component={AddTodo} />
        </Switch>
      </Router>
    </TodoProvider>
  );
};

export default App;

