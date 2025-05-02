# User Manual – Password Encryption System

## What You Need
- Node.js installed
- MongoDB running locally
- WebStorm (or any Node IDE)

## Setup
1. Clone the repo or download the zip
2. Install packages with:
   ```
   npm install
   ```

3. Add your `.env` file:
   ```
   MONGO_URI=mongodb://localhost:27017/passwordjs
   ```

4. Add input file `password.txt` like:
   ```
   someone@mail.com:plaintextpassword
   ```

## Running the App
Run the encryption and storage with:
```
node app.js
```

It will:
- Create `password.enc.txt`
- Store data into MongoDB
- Print true/false test results for login attempts

## Testing
### Unit Tests
Run all test cases:
```
node tests/unitTests.js
```

### Acceptance Tests
On Windows:
```
acceptance.bat
```
Will print `true/false` results.