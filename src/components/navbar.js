import React from 'react';
import styles from './taskbar.module.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <div className={styles.taskbar}>
            <h1>Tasker</h1>
            <p>Your task helper</p>
            <nav>
                <ul>
                    <li><Link to="/">Your List</Link></li>
                    <li><Link to="/add-todo">Add Item</Link></li>
                </ul>
            </nav>
        </div>
    );
}
