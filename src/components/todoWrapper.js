import React, { useState } from "react";
import { TodoForm } from "../components/TaskForm";
import { v4 as uuidv4 } from "uuid";
import { Todo } from "./Todo";
import { EditTodo } from "./EditTask";


export const TodoWrapper = () => {
    const [todos, setTodos] = useState([]);

    const addTodo = (todo) => {
        setTodos([...todos, { id: uuidv4(), task: todo, completed: false, isEditing: false }]);
    }

    const toggleCompleted = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo

            )
        )
    };

    const editTodo = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
            )
        )
    };

    const editTask = (task, id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
            )
        )
    };

    const deleteTodo = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? todo.id !== id : todo
            )
        )
    }


    return (
        <div className="TodoWrapper">
            <h1>Get things done!</h1>
            <TodoForm addTodo={addTodo} />
            {todos.map((todo, index) => (
                todo.isEditing ? (
                    <EditTodo editTodo={editTask} task={todo} />
                ) : (
                    <Todo task={todo}
                        key={index}
                        toggleCompleted={toggleCompleted}
                        deleteTodo={deleteTodo}
                        editTodo={editTodo} />
                )
            )

            )}

        </div>
    )

}