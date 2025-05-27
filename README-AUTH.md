# MongoDB Authentication Setup

This document provides instructions on how to set up and use the MongoDB authentication system for the e-commerce website.

## Setup

### 1. Install MongoDB

If you don't have MongoDB installed locally, you can download and install it from [MongoDB's official website](https://www.mongodb.com/try/download/community).

Alternatively, you can use MongoDB Atlas, a cloud-based MongoDB service:
1. Create an account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register)
2. Create a new cluster
3. Set up database access (username and password)
4. Set up network access (IP whitelist)
5. Get your connection string

### 2. Configure Environment Variables

Create or update the `.env.local` file in the root directory with the following variables:

```
# MongoDB Connection String
MONGODB_URI=mongodb://localhost:27017/ecom_db
# or for MongoDB Atlas
# MONGODB_URI=mongodb+srv://<username>:<password>@<cluster-url>/<database-name>?retryWrites=true&w=majority

# JWT Secret for Authentication
JWT_SECRET=your_jwt_secret_key_change_this_in_production
```

Replace the values with your actual MongoDB connection string and a secure JWT secret.

### 3. Install Required Dependencies

Make sure you have all the required dependencies installed:

```bash
npm install mongodb mongoose bcryptjs jsonwebtoken jwt-decode
```

## User Authentication Flow

### Registration (Sign Up)

1. User fills out the registration form with:
   - Social title (Mr, Mrs, Ms) - optional
   - Full name (required)
   - Email address (required)
   - Password (required, minimum 8 characters)
   - Birthdate (optional)

2. Form validation occurs on both client and server sides

3. On successful validation, the user data is stored in the MongoDB database with the password hashed for security

4. User is redirected to the login page

### Login

1. User enters their email and password

2. Credentials are validated against the database

3. On successful authentication:
   - A JWT token is generated and stored as an HTTP-only cookie
   - User is redirected to the home page or previous page

4. If authentication fails, an error message is displayed

### Protected Routes

Certain routes are protected and require authentication:

- `/profile/*`
- `/checkout/*`
- `/orders/*`

If a user tries to access these routes without being authenticated, they will be redirected to the login page.

### Logout

When a user logs out:

1. The JWT token cookie is cleared
2. User is redirected to the login page

## Database Schema

### User Collection

```typescript
interface User {
  socialTitle?: string; // Mr, Mrs, Ms
  fullName: string;
  email: string;
  password: string; // Hashed
  birthdate?: Date;
  createdAt: Date;
  updatedAt: Date;
}
```

## API Endpoints

### POST /api/auth/signup

Registers a new user.

**Request Body:**
```json
{
  "socialTitle": "Mr", // Optional
  "fullName": "John Doe",
  "email": "john@example.com",
  "password": "password123",
  "birthdate": "1990-01-01" // Optional, ISO format
}
```

**Response (201 Created):**
```json
{
  "message": "User created successfully",
  "user": {
    "_id": "user_id",
    "socialTitle": "Mr",
    "fullName": "John Doe",
    "email": "john@example.com",
    "birthdate": "1990-01-01T00:00:00.000Z",
    "createdAt": "2023-01-01T00:00:00.000Z"
  }
}
```

### POST /api/auth/login

Authenticates a user and returns a JWT token.

**Request Body:**
```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

**Response (200 OK):**
```json
{
  "message": "Login successful",
  "user": {
    "_id": "user_id",
    "socialTitle": "Mr",
    "fullName": "John Doe",
    "email": "john@example.com",
    "birthdate": "1990-01-01T00:00:00.000Z"
  },
  "token": "jwt_token"
}
```

## Client-Side Utilities

The `app/utils/auth.ts` file provides utility functions for client-side authentication:

- `getToken()`: Retrieves the JWT token from cookies
- `isAuthenticated()`: Checks if the user is authenticated
- `getUserInfo()`: Gets the user information from the JWT token
- `logout()`: Logs out the user by clearing the token cookie

## Security Considerations

1. Passwords are hashed using bcrypt before storing in the database
2. JWT tokens are stored as HTTP-only cookies to prevent XSS attacks
3. Sensitive routes are protected by middleware that verifies the JWT token
4. Token expiration is set to 7 days by default
5. Error messages are generic to prevent information leakage