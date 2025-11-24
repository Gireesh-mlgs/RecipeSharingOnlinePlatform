# 🍳 Online Recipe Sharing Platform

A full-stack **MERN** web application where users can share recipes, discover new dishes, rate & comment, and manage their profiles — while administrators handle user management, recipe moderation, and system settings through a dedicated dashboard.

---

## 📘 Project Summary

The Online Recipe Sharing Platform provides an interactive space for cooking enthusiasts to:

- Upload recipes  
- Discover recipes created by others  
- Interact through ratings & comments  
- Manage personal profiles and activities  

Administrators can:

- Manage users  
- Moderate recipes  
- Oversee platform settings  
- Track activity and analytics  

Each role has a **dedicated dashboard** with role-specific tools.

---

# 🎯 Key Features

## 👨‍🍳 User Features
- Share recipes (title, ingredients, steps, photos)
- Discover recipes using search & filters
- Rate and comment on recipes
- Edit or delete personal recipes
- Track recipe approval status (Pending/Approved/Rejected)
- Manage personal profile (name, email, password)
- View activity history (shared recipes, comments, ratings)

## 🛡️ Admin Features
- Manage users (create/update/delete roles)
- Approve or reject submitted recipes
- Review recipe details & images
- Manage system-wide settings
- View recipe statistics and performance graphs
- Monitor real-time user activities
- Moderate comments & interactions

---

# 📊 Dashboards

## 🧑‍🍳 User Dashboard Includes:
- My Recipes  
- Discover Recipes  
- Ratings & Comments  
- Profile Settings  
- Recipe Sharing History  

## 🛠️ Admin Dashboard Includes:
- User Management Table  
- Recipe Approval Center  
- System Settings Manager  
- Recipe Analytics & Trends  
- Real-Time Activity Monitor  

---

# 🧱 Tech Stack

## Frontend
- React.js  
- HTML5, CSS3, JavaScript  
- Bootstrap / Chakra UI  
- Axios  

## Backend
- Node.js  
- Express.js  
- MongoDB + Mongoose  
- JWT Authentication  
- bcrypt  
- Multer (File Uploads)  
- MVC Architecture  

## Tools
- Git & GitHub  
- MongoDB Compass / Atlas  
- Postman  
- VS Code  

---

# ⚙️ How to Run the Project (REAL SETUP)

Below are the actual, correct steps required to run your MERN project locally.

## 1️⃣ Clone the Repository


'git clone https://github.com/Gireesh-mlgs/RecipeSharingOnlinePlatform.git'
'cd RecipeSharingOnlinePlatform'


This folder should contain:

'/frontend'
'/backend'

#2️⃣ Backend Setup (Node + Express + MongoDB)
*Step 1 — Navigate to Backend
*cd backend

*Step 2 — Install Dependencies
*npm install

*Step 3 — Create .env File in /backend
'PORT=5000'
'MONGO_URI=mongodb://localhost:27017/recipehub'
'JWT_SECRET=yourSuperSecretKey'


If using MongoDB Atlas, replace MONGO_URI with your Atlas connection string.

*Step 4 — Start Backend Server
'npm start'


*Backend URL:
👉 http://localhost:5000

If you face CORS errors, ensure you have:

'app.use(cors());'

#3️⃣ Frontend Setup (React)
*Step 1 — Navigate to Frontend
'cd ../frontend'

*Step 2 — Install Dependencies
'npm install'

*Step 3 — Start Frontend
'npm start'


Frontend URL:
👉 http://localhost:3000

4️⃣ Connect Frontend to Backend

Inside:

frontend/src/api.js

Set base URL:

const api = axios.create({
  baseURL: "http://localhost:5000",
});


This ensures your React app communicates correctly with the backend API.

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

Backend API tested using Postman

Manual UI testing

Token-based route testing

MongoDB CRUD operation validation

#🤝 Contributing
*TEAM LEGACY

Gireesh Kumar — 24SCSE1180661

Harsh Sharma — 24SCSE1180531

Happy Garg — 24SCSE1180669

*📬 Contact

📧 Email: singhishu1@icloud.com
