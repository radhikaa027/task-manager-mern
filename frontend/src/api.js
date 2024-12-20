import axios from "axios";

const API_URL = "http://localhost:5000/tasks";

// Fetch all tasks
export const fetchTasks = async (page = 1, limit = 5) => {
  return await axios.get(`${API_URL}?page=${page}&limit=${limit}`);
};

// Create a new task
export const createTask = async (task) => {
  return await axios.post(API_URL, task);
};

// Update a task
export const updateTask = async (id, updatedTask) => {
  return await axios.put(`${API_URL}/${id}`, updatedTask);
};

// Delete a task
export const deleteTask = async (id) => {
  return await axios.delete(`${API_URL}/${id}`);
};
