import React, { useState, useEffect } from "react";

const TaskForm = ({ addTask, updateTask, taskToEdit }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    if (taskToEdit) {
      setTitle(taskToEdit.title);
      setDescription(taskToEdit.description);
      setIsCompleted(taskToEdit.isCompleted);
    }
  }, [taskToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const task = {
      title,
      description,
      isCompleted,
    };

    if (taskToEdit) {
      updateTask(taskToEdit._id, task); // Correct usage
    } else {
      addTask(task);
    }

    setTitle("");
    setDescription("");
    setIsCompleted(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          placeholder="Task Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>

      <div>
        <textarea
          placeholder="Task Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>

      <div>
        <label>
          <input
            type="checkbox"
            checked={isCompleted}
            onChange={(e) => setIsCompleted(e.target.checked)}
          />
          Mark as completed
        </label>
      </div>

      <div>
        <button type="submit">{taskToEdit ? "Update" : "Add"} Task</button>
      </div>
    </form>
  );
};

export default TaskForm;
