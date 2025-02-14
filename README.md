# User Authentication API - Express.js & MongoDB

## 📌 Project Overview
This is a backend web application built using **Express.js, MongoDB, and JWT authentication**. The application allows users to **register**, **log in**, and **search users** by  email.

## 🚀 Features
- **User Registration**: Save user information in the database.
- **User Login**: Authenticate users using JWT tokens.
- **Search User**: Find users by username or email.
- **Secure Authentication**: Password hashing with bcrypt and authentication using JWT.
- **Structured Codebase**: Follows best practices for structuring Express.js applications.

## 🛠️ Tech Stack
- **Backend**: Node.js, Express.js, MongoDB
- **Authentication**: JWT (JSON Web Token), bcrypt
- **API Testing**: Postman

## 📂 Project Structure
```
📦 Topsel_ass_backend
├── 📂 controllers
│   ├── authController.js    # User authentication logic
├── userController.js    # User search logic
├── 📂 middleware
│   ├── authMiddleware.js    # JWT authentication middleware
├── 📂 models
│   ├── User.js              # User schema/model
├── 📂 routes
│   ├── authRoutes.js        # Authentication routes
├── userRoutes.js        # search routes
├── .env                     # Environment variables
├── server.js                # Main entry point
├── package.json             # Dependencies & scripts

```

## 🔧 Installation & Setup
### 1️⃣ Clone the Repository
```
git clone https://github.com/Amansingh-06/User-Authentication-API---Express.js-MongoDB
cd Topsel_ass_backend

```

### 2️⃣ Install Dependencies
```
npm install
```

### 3️⃣ Configure Environment Variables
Create a `.env` file and add the following:
```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### 4️⃣ Start the Server
```
npm start
```
The server will start at `http://localhost:5000`


```

## 🔐 Authentication & Security
- Passwords are hashed using **bcrypt** before storing in the database.
- JWT authentication is used to secure routes.
- Middleware ensures that protected routes require valid tokens.

## 🎥 Video Walkthrough
📌 **Full Video Walkthrough:** [Gam Link](https://jam.dev/c/a59bfe5f-fdfc-46e8-9b99-45030e1cb42c)

## 📜 License
This project is licensed under the **MIT License**.

---
✅ **Project Completed & Uploaded to GitHub!** 🎯

