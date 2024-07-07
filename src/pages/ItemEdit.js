import React, { useRef, useState, useContext } from 'react';
import { TodoContext } from '../context/TodoContext';

const ItemEdit = ({ oldTask , onSave }) => {
    const { updateTodo } = useContext(TodoContext);
    const [newText, setNewText] = useState(oldTask.text); // Store initial and modified text
    const inputRef = useRef(null);

    const handleSave = () => {
        const trimmedText = newText.trim();
        if (trimmedText) {
            updateTodo(oldTask.id, trimmedText); // Update the todo using id and trimmed text
            setNewText(trimmedText); // Update component state with the saved text
            onSave()
        }
    };

    return (
        <div>
            <h1>Editor</h1>
            <input
                type="text"
                ref={inputRef}
                value={newText} // Use state for controlled input
                onChange={(e) => setNewText(e.target.value)} // Update state on input change
                placeholder="Edit Task"
            />
            <button onClick={handleSave}>Save</button>
        </div>
    );
};

export default ItemEdit;
