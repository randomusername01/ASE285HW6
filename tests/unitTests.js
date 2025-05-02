const assert = require('assert');
const { readPasswords, writeEncrypted } = require('../utils/fileHandler');
const { hashPassword } = require('../utils/hasher');
const fs = require('fs');

console.log("[UNIT TEST] Starting fileHandler and hasher tests...");

// Test 1: Read passwords
fs.writeFileSync('test.txt', 'test@example.com:1234');
const parsed = readPasswords('test.txt');
console.log(`[TEST] readPasswords -> ${JSON.stringify(parsed)}`);
assert.deepStrictEqual(parsed, [['test@example.com', '1234']]);
fs.unlinkSync('test.txt');

// Test 2: Hash function
const hash = hashPassword('1234');
console.log(`[TEST] hashPassword -> ${hash}`);
assert.strictEqual(typeof hash, 'string');
assert.strictEqual(hash.length, 64);

// Test 3: Write encrypted
const testOut = 'test.enc.txt';
writeEncrypted(testOut, [['a@b.com', 'abc123']]);
const contents = fs.readFileSync(testOut, 'utf-8');
console.log(`[TEST] writeEncrypted -> ${contents}`);
assert.strictEqual(contents, 'a@b.com:abc123');
fs.unlinkSync(testOut);

console.log("[UNIT TEST] All unit tests passed.\n");