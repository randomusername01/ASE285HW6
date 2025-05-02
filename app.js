// app.js
const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const { hashPassword } = require('./utils/hasher');
const { readPasswords, writeEncrypted } = require('./utils/fileHandler');
const { insertUsers, validateUser } = require('./controllers/authController');
require('dotenv').config();

async function main() {
  await mongoose.connect(process.env.MONGO_URI);

  const passwordPath = path.join(__dirname, 'password.txt');
  const encryptedPath = path.join(__dirname, 'password.enc.txt');

  const rawCreds = readPasswords(passwordPath);
  console.log("[INFO] Loaded raw credentials from password.txt");

  const encryptedCreds = rawCreds.map(([email, pass]) => [email, hashPassword(pass)]);
  console.log("[INFO] Hashed all passwords");

  writeEncrypted(encryptedPath, encryptedCreds);
  console.log("[INFO] Encrypted credentials written to password.enc.txt");

  await insertUsers(encryptedCreds);
  console.log("[INFO] Encrypted credentials inserted into MongoDB");

  const samples = [
    ['henry.taylor@edu.com', 'educatorbest'],
    ['sm.cho@hello.com', '123'],
    ['noname@hello.com', '1234'],
    ['alan.may@best.com', '']
  ];

  for (const [email, pwd] of samples) {
    const result = await validateUser(email, pwd);
    console.log(`[TEST] Login attempt for ${email} => ${result}`);
  }

  mongoose.connection.close();
}

main();