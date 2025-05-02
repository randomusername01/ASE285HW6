const fs = require('fs');

function readPasswords(filepath) {
  const lines = fs.readFileSync(filepath, 'utf-8').split('\n');
  return lines.filter(Boolean).map(line => line.split(':'));
}

function writeEncrypted(filepath, data) {
  const lines = data.map(([email, hash]) => `${email}:${hash}`).join('\n');
  fs.writeFileSync(filepath, lines);
}

module.exports = { readPasswords, writeEncrypted };