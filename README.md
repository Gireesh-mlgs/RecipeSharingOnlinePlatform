RecipeSharing – Recipe Sharing online platform 

RecipeHub is a full-stack recipe sharing platform where users can upload recipes, browse dishes, rate & comment, and interact with the community. Admins can manage users, recipes, and maintain a clean platform.

The project uses Java (Servlets + JDBC) for backend processing and Node.js + JavaScript for additional API operations and interactive components.

⭐ Features
For Users

Create an account and log in

Add recipes with ingredients, steps, and optional image

Search recipes by name, ingredient, or category

Rate & comment on recipes

View, edit, or delete own recipes

User-friendly UI with JavaScript interactions

For Admin

Manage user accounts

Approve / reject submitted recipes

Moderate comments and ratings

View all recipes in a dashboard

Access high-level platform activity data

🛠️ Tech Stack
Backend

Java Servlets

JDBC (MySQL)

Node.js (supporting API modules / JS operations)

Frontend

HTML5, CSS3

JavaScript

JSP pages

Database

MySQL

Tables typically include:

users

recipes

comments

ratings

Server

Apache Tomcat 9/10

Node.js runtime

🚀 How to Run the Java Server (Tomcat)
It can also run by Vs code by using Index.js (Run)
//Or you use node index.js

1. Requirements

JDK 8+

Apache Tomcat 9 or 10

MySQL server

IDE (IntelliJ / Eclipse / VS Code with Java support)

2. Import the Project

Open IDE → Import as Dynamic Web Project / Java Web Application

Add Apache Tomcat as the server runtime

3. Configure Database

Update your DB credentials in your connection class (e.g., DBConnection.java):

String url = "jdbc:mysql://localhost:3306/recipehub";
String username = "root";
String password = "your_password";


Run SQL script:

mysql -u root -p recipehub < sql/schema.sql

4. Deploy on Tomcat

Right-click project → Run on Server → Select Tomcat

Or build .war → place in TOMCAT/webapps/

5. Access the App
http://localhost:8080/RecipeHub

⚙️ How to Run the Node.js Components

Only include this if your project actually has Node modules. If you want, I can adjust this section to match your exact Node folder.

1. Requirements

Node.js v16+

npm package manager

2. Navigate to Node Directory
cd node

3. Install Dependencies
npm install

4. Run Node Server
node server.js


If you are using nodemon:

npx nodemon server.js

5. Typical Usage

Node.js may be used for:

Additional APIs

Image processing

Form validation

Server-side JS helpers

Ajax endpoints

Interaction example:

http://localhost:5000/api/recipes


Update the port number if different in your server.js.

🔄 Core Java Concepts Demonstrated

(For academic evaluation)

Encapsulation, OOP, interfaces

Collections (List, Map)

Exception handling

JDBC CRUD operations

Servlet lifecycle (doGet, doPost)

Session management (login auth)

📌 Team

Team Name: Legacy
Project Number: 7

Members:

Harsh Sharma

Gireesh Kumar

Gireesh Kumar

Happy Garg

📄 License

You can choose MIT, Apache, or keep it unlicensed for now.
