// src/controllers/authController.js
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../Models/User.js");
const { isEmail, isStrongPassword } = require("../utils/validators");

const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || "7d";
const COOKIE_NAME = "ss_token"; // cookie name

async function signup(req, res, next) {
  try {
    const { email, password, name } = req.body;
    if (!isEmail(email) || !isStrongPassword(password)) {
      return res.status(400).json({ message: "Invalid email or password (min 8 chars)." });
    }

    const existing = await User.findOne({ email });
    if (existing) return res.status(409).json({ message: "Email already registered." });

    const saltRounds = 10;
    const passwordHash = await bcrypt.hash(password, saltRounds);

    const user = await User.create({ email, passwordHash, name });
    // create token
    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });

    // set httpOnly cookie
    res.cookie(COOKIE_NAME, token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 1000 * 60 * 60 * 24 * 7, // 7 days
    });

    // return safe user data
    res.status(201).json({ user: { id: user._id, email: user.email, name: user.name } });
  } catch (err) {
    next(err);
  }
}

async function login(req, res, next) {
  try {
    const { email, password } = req.body;
    if (!isEmail(email) || !password) return res.status(400).json({ message: "Invalid credentials." });

    const user = await User.findOne({ email });
    if (!user) return res.status(401).json({ message: "Invalid email or password." });

    const ok = await bcrypt.compare(password, user.passwordHash);
    if (!ok) return res.status(401).json({ message: "Invalid email or password." });

    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });

    res.cookie(COOKIE_NAME, token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 1000 * 60 * 60 * 24 * 7,
    });

    res.json({ user: { id: user._id, email: user.email, name: user.name } });
  } catch (err) {
    next(err);
  }
}

async function logout(req, res) {
  res.clearCookie(COOKIE_NAME, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
  });
  res.json({ ok: true });
}

async function me(req, res) {
  // authMiddleware will attach req.user
  if (!req.user) return res.status(401).json({ message: "Not authenticated" });
  const { _id, email, name } = req.user;
  res.json({ user: { id: _id, email, name } });
}

module.exports = { signup, login, logout, me };
