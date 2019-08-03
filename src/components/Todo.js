import React from 'react';

const Todo = ({ doLogout }) => (
    <div>
        <div>Todo Page</div>
        <button onClick={doLogout}>Logout</button>
    </div>
);

export default Todo;