import React, { useState, useEffect } from "react";
import { createTask, updateTask, deleteTask, fetchTasks } from "./api";
import TaskItem from "./components/TaskItem";
import TaskForm from "./components/TaskForm";
import Pagination from "./components/Pagination";
import "./styles.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [currentTask, setCurrentTask] = useState(null);
  const [filter, setFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [tasksPerPage] = useState(5);

  useEffect(() => {
    const fetchTasksData = async () => {
      try {
        const response = await fetchTasks(currentPage, tasksPerPage);
        setTasks(response.data);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };

    fetchTasksData();
  }, [currentPage, tasksPerPage]);

  const addTask = async (newTask) => {
    try {
      const response = await createTask(newTask);
      setTasks([...tasks, response.data]);
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  const updateTaskInState = async (id, updatedTask) => {
    try {
      const response = await updateTask(id, updatedTask);
      setTasks(
        tasks.map((task) => (task._id === id ? response.data : task))
      );
      setCurrentTask(null);
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  const handleDeleteTask = async (id) => {
    try {
      await deleteTask(id);
      setTasks(tasks.filter((task) => task._id !== id));
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  const handleEditTask = (task) => {
    setCurrentTask(task);
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.isCompleted;
    if (filter === "incomplete") return !task.isCompleted;
    return true;
  });

  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container my-5">
      <h1 className="text-center">Task Manager</h1>

      <TaskForm
        addTask={addTask}
        updateTask={updateTaskInState} // Pass the correct update function
        taskToEdit={currentTask}
      />

      <div className="d-flex justify-content-between align-items-center mt-4">
        <h5>Tasks</h5>
        <div>
          <button
            className={`btn btn-sm ${filter === "all" ? "btn-primary" : "btn-outline-primary"} mx-1`}
            onClick={() => setFilter("all")}
          >
            All
          </button>
          <button
            className={`btn btn-sm ${filter === "completed" ? "btn-success" : "btn-outline-success"} mx-1`}
            onClick={() => setFilter("completed")}
          >
            Completed
          </button>
          <button
            className={`btn btn-sm ${filter === "incomplete" ? "btn-warning" : "btn-outline-warning"} mx-1`}
            onClick={() => setFilter("incomplete")}
          >
            Incomplete
          </button>
        </div>
      </div>

      <div className="list-group mt-3">
        {filteredTasks.length > 0 ? (
          filteredTasks.map((task) => (
            <TaskItem
              key={task._id}
              task={task}
              updateTask={updateTaskInState} // Pass here too
              deleteTask={handleDeleteTask}
            />
          ))
        ) : (
          <p className="text-center text-muted">No tasks available.</p>
        )}
      </div>

      {filteredTasks.length > tasksPerPage && (
        <Pagination
          tasksPerPage={tasksPerPage}
          totalTasks={filteredTasks.length}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
}

export default App;
