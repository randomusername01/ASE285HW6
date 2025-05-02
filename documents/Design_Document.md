# Design Document – ASE 285 Homework 6

## Architecture

### Overview
The system is designed as a modular Node.js application that performs four core tasks:
1. Reads plaintext user credentials from a file.
2. Hashes the passwords using SHA-256.
3. Stores the email-hash pairs in MongoDB using Mongoose.
4. Validates user login attempts from sample input.

### Architecture Flow
```
[password.txt] --> [File Reader] --> [Hasher] --> [MongoDB]
                                    ↓
                         [password.enc.txt]
```

## Module Design

### fileHandler.js
- Responsibility: Read/write credential files.
- Interfaces:
  - `readPasswords(filepath)` → returns [email, password] pairs.
  - `writeEncrypted(filepath, data)` → writes [email, hash] pairs to file.

### hasher.js
- Responsibility: Generate SHA-256 hash from plaintext password.
- Interface:
  - `hashPassword(password)` → returns hashed string.

### authController.js
- Responsibility: Manage user data storage and login validation.
- Interfaces:
  - `insertUsers(userList)` → bulk insert or update users in MongoDB.
  - `validateUser(email, password)` → return true/false for login check.

### User.js
- Mongoose model representing a user with email and hashed password fields.