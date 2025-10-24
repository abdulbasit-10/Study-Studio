// src/routes/auth.js
const express = require("express");
const router = express.Router();
const { signup, login, logout, me } = require("../Controllers/AuthController.js");

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);
router.get("/me", me);

module.exports = router;
