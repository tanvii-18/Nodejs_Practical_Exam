# 🍽️ Recipe App – MERN Stack Backend

This is a backend API for a Recipe Management Application built using the MERN stack. The project focuses on authentication, secure user management, and full CRUD operations for recipes.

It provides a structured and secure backend system where users can register, log in, and manage their own recipes.

## 🚀 Tech Stack

MongoDB

Express.js

Node.js

Mongoose

JWT Authentication

Cookie Parser

## 🔐 Features
### 1. Authentication System

User Registration

User Login

Password hashing for security

JWT-based authentication

Token stored securely in HTTP-only cookies using cookie-parser

Protected routes middleware

### 2. Recipe Management (CRUD)

Add new recipe

Get all recipes

Get single recipe by ID

Update recipe

Delete recipe

Only authenticated users can manage recipes

### 3. Database

MongoDB for storing users and recipes

Mongoose schema and models

Proper data validation

## 📁 Project Structure
```
recipe-app-backend/
│
├── config/          # Database connection
├── controllers/     # Business logic
├── models/          # Mongoose schemas
├── routes/          # API routes
├── middleware/      # Auth middleware
├── .env             # Environment variables
├── server.js        # Entry point

```

## ⚙️ API Endpoints
Auth Routes

POST /api/auth/register

POST /api/auth/login

Recipe Routes

POST /api/recipes

GET /api/recipes

GET /api/recipes/:id

PUT /api/recipes/:id

DELETE /api/recipes/:id

## 🔒 Security Implementation

JWT token generation and verification

Cookie-based authentication

Password encryption

Protected routes using middleware

Environment variables for sensitive data
