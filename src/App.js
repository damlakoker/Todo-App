
import './App.css';
import React, { useState } from 'react';
import TaskList from './TaskList';
import TaskForm from './TaskForm';



function App() {

  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  }

  return (
    <div className="App">
      <header>To Do App</header>
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} />
    </div>
  );
}


export default App;
