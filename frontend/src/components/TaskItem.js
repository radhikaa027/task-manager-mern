import React, { useState } from "react";
import TaskForm from "./TaskForm";

const TaskItem = ({ task, updateTask, deleteTask }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleTaskUpdate = async (taskId, updatedTaskData) => {
    if (updateTask) {
      await updateTask(taskId, updatedTaskData);
      setIsEditing(false); // Exit editing mode after updating
    } else {
      console.error("updateTask is not defined.");
    }
  };

  return (
    <div className="card my-2">
      <div className="card-body">
        {isEditing ? (
          <TaskForm taskToEdit={task} updateTask={handleTaskUpdate} />
        ) : (
          <>
            <h5 className="card-title">{task.title}</h5>
            <p className="card-text">{task.description}</p>
            <p>
              Status:{" "}
              <span className={task.isCompleted ? "text-success" : "text-danger"}>
                {task.isCompleted ? "Completed" : "Not Completed"}
              </span>
            </p>
            <button
              className="btn btn-primary btn-sm me-2"
              onClick={() => setIsEditing(true)}
            >
              Edit
            </button>
            <button
              className="btn btn-danger btn-sm"
              onClick={() => deleteTask(task._id)}
            >
              Delete
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default TaskItem;
