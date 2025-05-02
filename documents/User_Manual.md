# User Manual – Password Encryption System

## Overview
This application reads user credentials from a plaintext file, hashes the passwords using SHA-256, stores them in a MongoDB database, and validates login attempts.

## Requirements
- Node.js
- MongoDB Atlas or local MongoDB server
- WebStorm or any Node.js-compatible IDE

## Setup Instructions

1. Clone the project and install dependencies:
   ```
   npm install
   ```

2. Create a `.env` file with the following content:
   ```
   MONGO_URI=<your MongoDB connection string>
   ```

3. Add a `password.txt` file with contents formatted like:
   ```
   user@example.com:plaintextpassword
   ```

## How to Run

Run the main script:
```
node app.js
```

Expected behavior:
- Parses and hashes credentials from `password.txt`.
- Writes results to `password.enc.txt`.
- Stores encrypted entries in MongoDB.
- Validates sample login attempts and prints true/false results to the console.

## Testing

### Unit Tests
```
node tests/unitTests.js
```

### Acceptance Test
Run the acceptance test batch file:
```
acceptance.bat
```

## Troubleshooting

- If MongoDB connection fails, check `.env` for correctness and ensure the IP is whitelisted on Atlas.
- Make sure MongoDB is running if you're using a local database.