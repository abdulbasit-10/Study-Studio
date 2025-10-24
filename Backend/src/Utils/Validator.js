// src/utils/validators.js
function isEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email || "");
}

function isStrongPassword(pwd) {
  return typeof pwd === "string" && pwd.length >= 8;
}

module.exports = { isEmail, isStrongPassword };
