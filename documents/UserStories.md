# Requirements – ASE 285 Homework 6

## User Stories

### User Story 1: As a system administrator,
I want to read a list of user email and password pairs from a plaintext file (password.txt),
So that I can begin processing credentials for secure storage.

### User Story 2: As a security-conscious developer,
I want to hash all plaintext passwords using the SHA-256 algorithm,
So that user passwords are not stored in plaintext.

### User Story 3: As a backend developer,
I want to write the hashed passwords to a file (password.enc.txt),
So that the output can be reviewed and verified before database insertion.

### User Story 4: As a data engineer,
I want to insert the email and password hash pairs into a MongoDB database using Mongoose,
So that the data is stored securely and can be queried efficiently.

### User Story 5: As a system verifier,
I want to validate login attempts using a given email and password combination,
So that the system can determine whether the credentials match securely stored data.

### User Story 6: As a quality assurance engineer,
I want to write unit and acceptance tests for all major functionality,
So that the system can be verified against expected behavior.