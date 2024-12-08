"use strict";

const express = require("express");
const multer = require("multer");
const mysql = require("mysql2/promise");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
// const validation = require("./validation");  // Uncomment when validation.js is ready

const jwtSecret = "bb2848e5b2736a2a3685abc67981fd4a6e39c42e1ee00672e133abbb07f8cccbb4cd25";
const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(express.static("public"));
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(multer().none());

// Database connection details from environment variables
const dbConfig = {
  socketPath: process.env.INSTANCE_UNIX_SOCKET, // Cloud SQL Unix socket
  user: process.env.DB_USER,                   // Database user
  password: process.env.DB_PASS,               // Database password
  database: process.env.DB_NAME,               // Database name
};

// Helper function to get DB connection
async function getDBConnection() {
  return mysql.createPool({
    ...dbConfig,
    connectionLimit: 5,
  });
}

// Register a new account
app.post("/register", async (req, res) => {
  const { uname, password } = req.body;

  if (!uname || !password) {
    return res.status(400).json({ message: "Missing required parameter." });
  }

  const pool = await getDBConnection();
  const [existingUser] = await pool.query("SELECT uname FROM users WHERE uname = ?", [uname]);

  if (existingUser.length > 0) {
    return res.status(400).json({ message: "User already exists." });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  await pool.query("INSERT INTO users (uname, password) VALUES (?, ?)", [uname, hashedPassword]);

  res.status(201).json({ message: "Registration successful" });
});

// User login
app.post("/login", async (req, res) => {
  const { uname, password } = req.body;

  if (!uname || !password) {
    return res.status(400).json({ message: "Missing required parameter." });
  }

  const pool = await getDBConnection();
  const [user] = await pool.query("SELECT uname, password FROM users WHERE uname = ?", [uname]);

  if (user.length === 0) {
    return res.status(400).json({ message: "User not found" });
  }

  const isMatch = await bcrypt.compare(password, user[0].password);
  if (!isMatch) {
    return res.status(400).json({ message: "Password incorrect." });
  }

  const token = jwt.sign({ login: true, uname }, jwtSecret, { expiresIn: "7d" });
  res.cookie("jwt", token, { httpOnly: true, maxAge: 7 * 24 * 60 * 60 * 1000 }); // 7 days
  res.status(200).json({ message: "Login successful", redirectUrl: "/index.html" });
});

// Access user area
app.get("/user", (req, res) => {
  const token = req.cookies.jwt;

  if (!token) {
    return res.status(401).json({ message: "Not authorized, token not available" });
  }

  jwt.verify(token, jwtSecret, (err, decodedToken) => {
    if (err) {
      return res.status(401).json({ message: "Not authorized" });
    }
    res.sendFile(__dirname + "/public/user.html");
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});
