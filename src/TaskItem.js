import React, { useState } from 'react'
import EditTask from './EditTask';

function TaskItem({ task }) {

    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxClick = () => {
        setIsChecked(!isChecked);
    }




    return (
        <li>
            <input type='checkbox' checked={isChecked} onChange={handleCheckboxClick} />
            {task.description}
            <EditTask task={task}></EditTask>
            <button>Delete</button>
        </li>
    )
}



export default TaskItem;