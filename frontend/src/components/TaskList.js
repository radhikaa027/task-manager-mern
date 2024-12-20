import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, updateTask, deleteTask }) => {
  if (!tasks.length) {
    return <p>No tasks available. Please add some tasks!</p>;
  }

  return (
    <div>
      {tasks.map((task) => (
        <TaskItem key={task._id} task={task} updateTask={updateTask} deleteTask={deleteTask} />
      ))}
    </div>
  );
};

export default TaskList;
