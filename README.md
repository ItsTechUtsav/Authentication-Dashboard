# Primetrade Frontend Developer Intern Assignment

This project is a full-stack web application built as part of the Frontend Developer Intern assignment.

The main focus of the project is frontend development along with a basic backend to support authentication and dashboard features.

## Features

- User Registration and Login using JWT authentication
- Protected dashboard routes
- Task management (Add, View, Delete tasks)
- User-specific data handling
- Responsive UI using Tailwind CSS

## Tech Stack

### Frontend

- React.js
- React Router
- Tailwind CSS

### Backend

- Node.js
- Express.js
- MongoDB Atlas
- JWT Authentication

## Project Structure

```
/frontend -> React application
/backend -> Node.js + Express API
```

## Prerequisites

Before running this project, make sure you have the following installed:

- Node.js (version 14 or higher)
- npm or yarn
- MongoDB Atlas account (for database)

## Installation

### Backend Setup

1. Navigate to the backend directory:

   ```
   cd backend
   ```

2. Install dependencies:

   ```
   npm install
   ```

3. Create a `.env` file in the backend folder with the following variables:

   ```
   PORT=5000
   MONGO_URI=your_mongodb_uri
   JWT_SECRET=your_secret
   ```

4. Start the development server:
   ```
   npm run dev
   ```

### Frontend Setup

1. Navigate to the frontend directory:

   ```
   cd frontend
   ```

2. Install dependencies:

   ```
   npm install
   ```

3. Start the development server:
   ```
   npm start
   ```

The frontend will run on `http://localhost:3000` and the backend on `http://localhost:5000`.

## API Endpoints

### Authentication

- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user

### User

- `GET /api/users/profile` - Get user profile (protected)

### Tasks

- `GET /api/tasks` - Get all tasks for the user (protected)
- `POST /api/tasks` - Create a new task (protected)
- `DELETE /api/tasks/:id` - Delete a task by ID (protected)

## Scalability Notes

If this project were to be scaled for production:

- JWT tokens would be stored using HttpOnly cookies
- Backend and frontend would be deployed separately
- Pagination would be added for tasks
- Better error handling and logging would be implemented
- Rate limiting and security measures would be added
- Database indexing and optimization

## Author

Utsav  
Frontend Developer Intern Candidate

## License

This project is for educational purposes as part of an internship assignment.
