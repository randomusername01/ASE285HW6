const User = require('../models/User');
const { hashPassword } = require('../utils/hasher');

async function insertUsers(userList) {
  for (const [email, hash] of userList) {
    await User.updateOne(
      { email },
      { email, passwordHash: hash },
      { upsert: true }
    );
  }
}

async function validateUser(email, password) {
  if (!email || !password) return false;
  const user = await User.findOne({ email });
  return user ? user.passwordHash === hashPassword(password) : false;
}

module.exports = { insertUsers, validateUser };