# ASE 285 Homework 6 – Password Encryption System

## Overview
This Node.js application reads plaintext email-password pairs from `password.txt`, hashes the passwords using SHA-256, stores them in MongoDB using Mongoose, and validates login attempts from the command line.

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

2. Create a `.env` file with:
   ```
   MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/passwordjs?retryWrites=true&w=majority
   ```

3. Add a `password.txt` input file in the format:
   ```
   email@example.com:plaintextpassword
   ```

## Running the App
```
node app.js
```

## Running Tests
```
node tests/unitTests.js
acceptance.bat
```