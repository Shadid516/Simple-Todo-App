import React, { useContext, useEffect, useState } from 'react';
import { TodoContext } from '../context/TodoContext';
import ItemEdit from './ItemEdit';
import StyleSheet from './home.module.css';

const Home = () => {
    const { todos, deleteTodo } = useContext(TodoContext);
    const [isEditing, setisEditing] = useState(false);
    const [editcomp, seteditcomp] = useState({});

    useEffect(() => {
        console.log(
            'Todos:',
            todos.map((todo) => `{id: ${todo.id}, text: ${todo.text}}`).join(', ')
        );
    }, [todos]);


    const enableEditor = (todo) => {
        seteditcomp(todo);
        setisEditing(true);
    };



    return (
        <div className={StyleSheet.todo}>
            <h1>Your List</h1>
            {todos.length === 0 && <p><i>Much empty... such wow!</i><br></br><br></br>Add a task from the top right menu.</p>}
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>{todo.text}
                        <button onClick={() => enableEditor(todo)}>Edit</button>
                        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                    </li>
                ))}
            </ul>
            {isEditing && <ItemEdit oldTask={editcomp} onSave={() => setisEditing(false)} />}
        </div>
    );
};

export default Home;
