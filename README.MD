# Task Management API:

  This is a RESTful API for managing tasks in a task management application. The API is built using Node.js, Express.js, and MongoDB.

## Setup Instructions
1. Prerequisites
 Node.js (v16 or later)
 MongoDB (local or hosted, e.g., MongoDB Atlas)
 Git (optional)
2. Clone the Repository
 git clone https://github.com/manojkumar9786/task-management
3. Install Dependencies
 npm install
4. Environment Variables
 Create a .env file in the root directory with the following content:

 PORT=5000
 MONGO_URI=your-mongodb-connection-string
5. Start the Server
 npm start

# API Endpoints
## Task Routes:
1. Create a Task
 URL: POST /tasks
 Description: Create a new task.
 
2. Get All Tasks
  URL: GET /tasks
  Description: Retrieve all tasks with optional filters.
  Query Parameters:
  status (optional): TODO, IN_PROGRESS, COMPLETED
  priority (optional): LOW, MEDIUM, HIGH
  sort (optional): createdAt or dueDate (default: createdAt)
  order (optional): asc or desc (default: asc)
  limit (optional): Number of tasks per page (default: 10)
  skip (optional): Number of tasks to skip for pagination
  Example: GET /tasks?status=TODO&priority=HIGH&sort=dueDate&order=desc

3. Get a Task by ID
 URL: GET /tasks/:id
 Description: Retrieve a specific task by its ID.

4. Update a Task
 URL: PUT /tasks/:id
 Description: Update an existing task by ID.

5. Delete a Task
 URL: DELETE /tasks/:id
 Description: Delete a task by ID.
 Response: 204 No Content