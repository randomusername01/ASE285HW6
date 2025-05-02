# Design Document – ASE 285 HW6

## Architecture

**Modules**:
- Input: `password.txt`
- Processing: Hash with SHA-256, write to `password.enc.txt`
- Storage: MongoDB using Mongoose
- Output: Boolean for credential validation

**Diagram**:
```
[password.txt] --> [File Reader] --> [Hasher] --> [MongoDB]
                                    ↓
                         [password.enc.txt]
```

## Modules

### 1. fileHandler.js
- `readPasswords(path)`: Returns list of [email, password]
- `writeEncrypted(path, data)`: Saves [email, hash] pairs

### 2. hasher.js
- `hashPassword(pwd)`: Returns SHA-256 hash

### 3. authController.js
- `insertUsers(list)`: Saves encrypted pairs to DB
- `validateUser(email, pwd)`: Returns true/false