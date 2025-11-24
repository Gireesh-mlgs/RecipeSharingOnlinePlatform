🍳 Online Recipe Sharing Platform

Overview

A full-stack MERN web application where users can share recipes, discover new dishes, rate & comment, and manage their profiles — while administrators handle user management, recipe moderation, and system settings through a dedicated dashboard.

📘 Project Summary

The Online Recipe Sharing Platform provides an interactive space for cooking enthusiasts to:

Upload recipes

Discover recipes created by others

Interact through ratings & comments

Manage personal profiles and activities

Administrators can:

Manage users

Moderate recipes

Oversee platform settings

Track activity and analytics

Each role has a dedicated dashboard with role-specific tools.

🎯 Key Features

👨‍🍳 User Features

Share recipes (title, ingredients, steps, photos)

Discover recipes using search & filters

Rate and comment on recipes

Edit or delete personal recipes

Track recipe approval status (Pending/Approved/Rejected)

Manage personal profile (name, email, password)

View activity history (shared recipes, comments, ratings)

🛡️ Admin Features

Manage users (create/update/delete roles)

Approve or reject submitted recipes

Review recipe details & images

Manage system-wide settings

View recipe statistics and performance graphs

Monitor real-time user activities

Moderate comments & interactions

📊 Dashboards

🧑‍🍳 User Dashboard Includes:

My Recipes

Discover Recipes

Ratings & Comments

Profile Settings

Recipe Sharing History

🛠️ Admin Dashboard Includes:

User Management Table

Recipe Approval Center

System Settings Manager

Recipe Analytics & Trends

Real-Time Activity Monitor

🧱 Tech Stack

Frontend

React.js

HTML5, CSS3, JavaScript

Bootstrap / Chakra UI

Axios

Backend

Node.js

Express.js

MongoDB + Mongoose

JWT Authentication

bcrypt

Multer (File Uploads)

MVC Architecture

Tools

Git & GitHub

MongoDB Compass / Atlas

Postman

VS Code

⚙️ How to Run the Project (Local Setup)

Below are the actual, correct steps required to run your MERN project locally.

1️⃣ Clone the Repository

Start by cloning the project repository and navigating into the main directory:

git clone [https://github.com/Gireesh-mlgs/RecipeSharingOnlinePlatform.git](https://github.com/Gireesh-mlgs/RecipeSharingOnlinePlatform.git)
cd RecipeSharingOnlinePlatform


You should now be in the root directory containing the /frontend and /backend folders.

2️⃣ Backend Setup (Node + Express + MongoDB)

The backend handles the API, database interaction, and business logic.

Step 1 — Navigate to Backend

cd backend


Step 2 — Install Dependencies

npm install


Step 3 — Configure Environment Variables

Create a file named .env inside the /backend directory and populate it with the following configuration:

PORT=5000
MONGO_URI=mongodb://localhost:27017/recipehub
JWT_SECRET=yourSuperSecretKey


📝 Note: If you are using MongoDB Atlas, replace the MONGO_URI with your connection string.

Step 4 — Start Backend Server

npm start


The backend API server will be running at:
👉 http://localhost:5000

CORS Check: If you encounter Cross-Origin Resource Sharing (CORS) errors, ensure the backend application has app.use(cors()); configured correctly.

3️⃣ Frontend Setup (React)

The frontend is a React application that serves the user interface.

Step 1 — Navigate to Frontend

Return to the root directory and enter the frontend folder:

cd ../frontend


Step 2 — Install Dependencies

npm install


Step 3 — Start the Frontend Application

npm start


The frontend application will start and be accessible at:
👉 http://localhost:3000

4️⃣ Connect Frontend to Backend

To ensure the React app communicates with your local Express server, verify the API base URL configuration.

In frontend/src/api.js, the base URL should be set as follows:

const api = axios.create({
  baseURL: "http://localhost:5000", 
});


🔗 API Endpoints (Sample)

The following are key API routes exposed by the Express server:

Category

Method

Endpoint

Description

Authentication

POST

/auth/register

Creates a new user account.



POST

/auth/login

Authenticates a user and returns a token.

Recipes

GET

/recipes

Retrieves a list of all recipes.



POST

/recipes

Creates a new recipe (requires authentication).



PUT

/recipes/:id

Updates a specific recipe.



DELETE

/recipes/:id

Deletes a specific recipe.

Admin

GET

/admin/users

Lists all users (Admin only).



PUT

/admin/recipes/:id/approve

Approves a recipe for public viewing (Admin only).

🧪 Testing

The platform has undergone the following testing procedures:

Backend API: All endpoints have been validated via Postman collections.

UI: User interfaces and interactions have been tested manually across different devices.

Security: Token-based protected routes have been tested to ensure unauthorized access is prevented.

Database: MongoDB data validation ensures schema integrity and successful storage/retrieval.

🤝 Contributing

This project was developed by TEAM LEGACY.

Name

Student ID

GIREESH KUMAR

24SCSE1180661

HARSH SHARMA

24SCSE1180531

HAPPY GARG

24SCSE1180669

📬 Contact

For questions or inquiries regarding the project, please contact:

📧 Email: singhishu1@icloud.com