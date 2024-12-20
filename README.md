# Task Manager Application

A full-stack Task Manager application built using the **MERN (MongoDB, Express.js, React.js, Node.js)** stack. This application allows users to create, update, delete, and manage tasks effectively.

---

## Features

- Add new tasks with title and description.
- Update existing tasks.
- Delete tasks.
- Mark tasks as completed or pending.
- Backend API to handle CRUD operations.

---

## Project Structure

```
Task-Manager-MERN/
├── backend/
│   ├── controllers/
│   │   └── taskController.js
│   ├── models/
│   │   └── task.js
│   ├── routes/
│   │   └── taskRoutes.js
│   └── index.js
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── TaskForm.js
│   │   │   └── TaskList.js
│   │   └── App.js
│   └── index.js
├── .env
├── README.md
└── package.json
```

---

## Requirements

- **Node.js** (v16 or higher)
- **MongoDB** (Local or Cloud instance)
- **npm** or **yarn** (for dependency management)

---

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/task-manager-mern.git
cd task-manager-mern
```

### 2. Backend Setup

```bash
cd backend
npm install
```

- Create a `.env` file in the `backend/` directory with the following contents:

```
MONGO_URI=mongodb://127.0.0.1:27017/task-manager
PORT=5000
```

- Start the backend server:

```bash
npm run dev
```

### 3. Frontend Setup

```bash
cd frontend
npm install
```

- Create a `.env` file in the `frontend/` directory with the following contents:

```
REACT_APP_BASE_URL=http://localhost:5000
```

- Start the frontend development server:

```bash
npm start
```

---

## API Endpoints

### Base URL: `http://localhost:5000`

#### 1. Get All Tasks
- **Endpoint**: `/tasks`
- **Method**: `GET`
- **Response**:
  ```json
  [
    {
      "_id": "task-id",
      "title": "Task Title",
      "description": "Task Description",
      "isCompleted": false,
      "createdAt": "2024-01-01T12:00:00.000Z",
      "updatedAt": "2024-01-01T12:00:00.000Z"
    }
  ]
  ```

#### 2. Create a Task
- **Endpoint**: `/tasks`
- **Method**: `POST`
- **Request Body**:
  ```json
  {
    "title": "Task Title",
    "description": "Task Description",
    "isCompleted": false
  }
  ```
- **Response**:
  ```json
  {
    "_id": "task-id",
    "title": "Task Title",
    "description": "Task Description",
    "isCompleted": false,
    "createdAt": "2024-01-01T12:00:00.000Z",
    "updatedAt": "2024-01-01T12:00:00.000Z"
  }
  ```

#### 3. Update a Task
- **Endpoint**: `/tasks/:id`
- **Method**: `PUT`
- **Request Body**:
  ```json
  {
    "title": "Updated Task Title",
    "description": "Updated Task Description",
    "isCompleted": true
  }
  ```
- **Response**:
  ```json
  {
    "_id": "task-id",
    "title": "Updated Task Title",
    "description": "Updated Task Description",
    "isCompleted": true,
    "createdAt": "2024-01-01T12:00:00.000Z",
    "updatedAt": "2024-01-02T12:00:00.000Z"
  }
  ```

#### 4. Delete a Task
- **Endpoint**: `/tasks/:id`
- **Method**: `DELETE`
- **Response**:
  ```json
  {
    "message": "Task deleted successfully"
  }
  ```

---

## Frontend Components

### 1. `TaskForm`
- A component for adding and updating tasks.
- Props:
  - `addTask`: Function to add a new task.

### 2. `TaskList`
- A component for displaying the list of tasks.
- Props:
  - `tasks`: Array of tasks.
  - `updateTask`: Function to update a task.
  - `deleteTask`: Function to delete a task.

---

## Running the Application

1. Start the backend server:
   ```bash
   cd backend
   npm run dev
   ```

2. Start the frontend server:
   ```bash
   cd frontend
   npm start
   ```

3. Open your browser and navigate to `http://localhost:3000`.

---

## Troubleshooting

### Common Issues:

1. **Failed to connect to MongoDB**:
   - Ensure MongoDB is running locally.
   - Verify the `MONGO_URI` in the backend `.env` file.

2. **`BASE_URL` Errors in Frontend**:
   - Make sure `REACT_APP_BASE_URL` is set correctly in the `.env` file in the `frontend/` directory.
   - Restart the frontend server after changing `.env`.

3. **CORS Issues**:
   - Ensure the `cors` middleware is added in the backend.

---

## License

This project is licensed under the MIT License.

