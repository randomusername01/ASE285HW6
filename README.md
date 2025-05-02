# ASE 285 Homework 6 – Password Encryption System

## Overview
This Node.js application reads plaintext email-password pairs from `password.txt`, hashes the passwords using SHA-256, stores them in MongoDB, and validates login attempts securely.

## Project Structure
```
passwordjs/
├── app.js
├── password.txt
├── password.enc.txt
├── controllers/
│   └── authController.js
├── models/
│   └── User.js
├── utils/
│   ├── fileHandler.js
│   └── hasher.js
├── tests/
│   └── unitTests.js
├── .env
├── acceptance.bat
└── README.md
```

## Setup
1. Install dependencies:
   ```
   npm install mongoose dotenv
   ```

2. Create `.env`:
   ```
   MONGO_URI=mongodb://localhost:27017/passwordjs
   ```

3. Add `password.txt` in the format:
   ```
   user@example.com:plaintextpassword
   ```

## Run the App
```
node app.js
```

## Run Tests
```
node tests/unitTests.js
sh acceptance.bat
```