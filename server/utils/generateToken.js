const jwt = require('jsonwebtoken');

const generateToken = (id) => {
  console.log('SECRET', process.env.JWT_SECRET);
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '15d',
  });
};

module.exports = generateToken;
