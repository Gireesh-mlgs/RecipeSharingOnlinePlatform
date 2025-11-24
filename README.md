🍳 Online Recipe Sharing Platform

A full-stack MERN web application where users can share recipes, discover new dishes, rate & comment, and manage their profiles, while administrators handle user management, recipe moderation, and system settings through a dedicated dashboard.

📘 Project Summary

The Online Recipe Sharing Platform provides an interactive space for cooking enthusiasts to upload recipes, interact with others through ratings and comments, and browse a variety of dishes.
Admins are provided advanced tools to manage users, content, and system configurations.

Each user type has its own dedicated dashboard for easy navigation and role-based access.

🎯 Key Features
👨‍🍳 User Features

Share recipes (title, ingredients, steps, photos)

Discover recipes using search and filters

Rate and comment on recipes

Edit or delete personal recipes

Track recipe approval status (Pending/Approved/Rejected)

Manage personal profile (name, email, password)

View complete activity history

🛡️ Admin Features

Manage users (create/update/delete roles)

Approve or reject recipes submitted by users

Review recipe details and content

Manage system-wide settings

View recipe statistics (graphs & data trends)

Monitor user activities in real-time

Moderate comments & interactions

📊 Dashboards
🧑‍🍳 User Dashboard

My Recipes

Discover Recipes

Ratings & Comments

Profile Settings

Recipe Sharing History

🛠️ Admin Dashboard

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

Multer

MVC Architecture

Tools

Git & GitHub

MongoDB Compass / Atlas

Postman

VS Code

⚙️ How to Run the Project (REAL SETUP)

Below are the actual, correct steps to run your real MERN project.

1️⃣ Clone the Repository
git clone <(https://github.com/Gireesh-mlgs/RecipeSharingOnlinePlatform)>
cd project


You should now see:

/frontend
/backend

2️⃣ Backend Setup (Node + Express + MongoDB)
Step 1 — Navigate to Backend
cd backend

Step 2 — Install dependencies
npm install

Step 3 — Create .env file inside /backend
PORT=5000
MONGO_URI=mongodb://localhost:27017/recipehub
JWT_SECRET=yourSuperSecretKey


If using MongoDB Atlas, replace the URI accordingly.

Step 4 — Start backend
npm start


Backend runs at:

👉 http://localhost:5000

If CORS errors occur, ensure backend includes:

app.use(cors());

3️⃣ Frontend Setup (React)
Step 1 — Navigate to frontend
cd ../frontend

Step 2 — Install dependencies
npm install

Step 3 — Start the frontend
npm start


Frontend runs at:

👉 http://localhost:3000

4️⃣ Connect Frontend to Backend

In frontend/src/api.js, make sure the API base URL is:

const api = axios.create({
  baseURL: "http://localhost:5000",
});


This ensures all requests are sent to your backend.

🗂️ Project Structure
project/
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── middleware/
│   ├── routes/
│   ├── uploads/
│   ├── server.js
│   ├── .env
│   └── package.json
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── .env
│   └── package.json
│
└── README.md

📸 Screenshots (Add as needed)

You may add:

Login Screen

User Dashboard

Recipe Upload Page

Recipe Details Page

Admin Dashboard

Approval Panel


🔗 API Endpoints (Sample)
Authentication
POST /auth/register
POST /auth/login

Recipes
GET /recipes
POST /recipes
PUT /recipes/:id
DELETE /recipes/:id

Admin
GET /admin/users
PUT /admin/recipes/:id/approve

🧪 Testing

Backend API validated via Postman

UI tested manually

Token-based protected route testing

MongoDB data validation

🤝 Contributing

 TEAM LEGACY

 GIREESH KUMAR 24SCSE1180661
 HARSH SHARMA 24SCSE1180531
 HAPPY GARG 24SCSE1180669

📬 Contact

📧 Email: singhishu1@icloud.com
