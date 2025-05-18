# Instagram Clone

A full-stack Instagram clone with a React frontend and Node.js backend.

## Features

- Instagram-like login page
- Password saving functionality (credentials saved to JSON file)
- Network checking loading screen

## Setup Instructions

### Backend Setup

1. Navigate to the backend directory:
   ```
   cd backend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the server:
   ```
   npm start
   ```

The backend server will run on http://localhost:5000

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

The frontend will run on http://localhost:3000

## How It Works

1. When a user enters their login credentials, the password is displayed in plain text (not masked)
2. When the login button is clicked, a loading screen appears with a network checking message
3. The credentials are sent to the backend server and saved in a JSON file at `backend/data/credentials.json`
4. After a brief delay, the user is redirected to the home page

## Security Note

This project is for demonstration purposes only. In a real application, you would:
- Never store passwords in plain text
- Use proper encryption/hashing for sensitive data
- Implement proper authentication with tokens
- Use HTTPS for secure data transmission 