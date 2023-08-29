import React, { useState } from "react";



function EditTask({ task }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editedTask, setEditedTask] = useState(task.description);
    let kerem = "";

    const handleEditClick = () => {
        setIsEditing(true);
    }

    const handleSaveClick = () => {


        setIsEditing(false);
    }

    const handleTaskChange = (e) => {
        setEditedTask(e.target.value);
    }

    return (
        <div className="edit">
            {isEditing ? (
                <div>
                    <textarea
                        value={editedTask}
                        onChange={handleTaskChange}
                    />
                    <button onClick={handleSaveClick}>Save</button>
                </div>
            ) : (
                <div>
                    <span>{task}</span>
                    <button onClick={handleEditClick}>Edit</button>

                </div>
            )}
        </div>
    );
}








export default EditTask;