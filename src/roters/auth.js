const express = require("express");
const validateLogin = require("../middleware/validateLogin");

const router = express.Router();

// Mock user data (replace with database logic)
const users = [
  { email: "user@example.com", password: "password123" },
];

// Login POST route
router.post("/login", validateLogin, (req, res) => {
  const { email, password } = req.body;

  // Check user credentials
  const user = users.find(
    (u) => u.email === email && u.password === password
  );

  if (!user) {
    return res.status(401).json({ error: "Invalid email or password." });
  }

  // Respond with success (you can add JWT or session logic here)
  res.status(200).json({ message: "Login successful!" });
});

module.exports = router;