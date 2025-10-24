// src/middleware/authMiddleware.js
const jwt = require("jsonwebtoken");
const User = require("../Models/User")
const JWT_SECRET = process.env.JWT_SECRET;
const COOKIE_NAME = "ss_token";

async function authMiddleware(req, res, next) {
  try {
    const token = req.cookies[COOKIE_NAME];
    if (!token) {
      req.user = null;
      return next();
    }
    const decoded = jwt.verify(token, JWT_SECRET);
    const user = await User.findById(decoded.id).select("-passwordHash");
    req.user = user || null;
    next();
  } catch (err) {
    // invalid token -> clear user
    req.user = null;
    next();
  }
}

module.exports = authMiddleware;
