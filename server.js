"use strict";

const express = require("express");
const multer = require("multer");
const sqlite3 = require("sqlite3").verbose();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

const jwtSecret = "bb2848e5b2736a2a3685abc67981fd4a6e39c42e1ee00672e133abbb07f8cccbb4cd25";
const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(express.static("public"));
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(multer().none());

// Initialize SQLite database
const db = new sqlite3.Database("./database.db", (err) => {
  if (err) {
    console.error("Error opening database:", err.message);
  } else {
    console.log("Connected to SQLite database.");
    db.run(
      `CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        uname TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL
      )`,
      (err) => {
        if (err) console.error("Error creating table:", err.message);
      }
    );
  }
});

// ** User Registration **
app.post("/register", async (req, res) => {
  const { uname, password } = req.body;

  if (!uname || !password) {
    return res.status(400).json({ message: "Missing required fields." });
  }

  db.get("SELECT uname FROM users WHERE uname = ?", [uname], async (err, row) => {
    if (err) return res.status(500).json({ message: "Database error." });
    if (row) return res.status(400).json({ message: "User already exists." });

    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      db.run("INSERT INTO users (uname, password) VALUES (?, ?)", [uname, hashedPassword], (err) => {
        if (err) return res.status(500).json({ message: "Error creating user." });
        res.status(201).json({ message: "Registration successful" });
      });
    } catch (err) {
      res.status(500).json({ message: "Error processing request." });
    }
  });
});

// ** User Login **
app.post("/login", (req, res) => {
  const { uname, password } = req.body;

  if (!uname || !password) {
    return res.status(400).json({ message: "Missing required fields." });
  }

  db.get("SELECT * FROM users WHERE uname = ?", [uname], async (err, user) => {
    if (err) return res.status(500).json({ message: "Database error." });
    if (!user) return res.status(404).json({ message: "User not found." });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials." });
    }

    const token = jwt.sign({ login: true, uname }, jwtSecret, { expiresIn: "7d" });
    res.cookie("jwt", token, { httpOnly: true, maxAge: 7 * 24 * 60 * 60 * 1000 }); // 7 days
    res.status(200).json({ message: "Login successful", uname, redirectUrl: "/index.html" });

  });
});

// ** Protected User Page Access **
app.get("/user", (req, res) => {
  const token = req.cookies.jwt;

  if (!token) return res.status(401).json({ message: "Unauthorized access." });

  jwt.verify(token, jwtSecret, (err, decodedToken) => {
    if (err) return res.status(403).json({ message: "Invalid token." });
    res.sendFile(__dirname + "/public/user.html");
  });
});

// ** Start Server **
app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});
