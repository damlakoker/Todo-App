import React, { useState } from "react";


export const EditTodo = ({ editTodo, task }) => {
    const [value, setValue] = useState(task.task);

    const handleSubmit = (e) => {
        e.preventDefault();

        editTodo(value, task.id);
        setValue("")

    }


    return (
        <form onSubmit={handleSubmit} className="TodoForm">
            <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className="todo-input" placeholder="Edit the task" />
            <button type="submit" className="todo-btn">Update Task</button>
        </form>
    )
}





