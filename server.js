"use strict";

const express = require("express");
const multer = require("multer");
const sqlite3 = require("sqlite3");
const sqlite = require("sqlite");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
// const validation = require("./validation");  // Uncomment when validation.js is ready

const jwtSecret = "bb2848e5b2736a2a3685abc67981fd4a6e39c42e1ee00672e133abbb07f8cccbb4cd25";
const app = express();
const PORT = process.env.PORT || 8080;
const DB_PATH = "app.db";

// Middleware
app.use(express.static("public"));
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(multer().none());

// Helper function to get DB connection
async function getDBConnection() {
    return sqlite.open({
        filename: DB_PATH,
        driver: sqlite3.Database
    });
}

// Endpoint: Register a new account
app.post("/register", async (req, res) => {
    const { uname, password } = req.body;

    if (!uname || !password) {
        return res.status(400).json({ message: "Missing required parameter." });
    }

    const db = await getDBConnection();
    const userExists = await db.get("SELECT uname FROM users WHERE uname = ?", [uname]);

    if (userExists) {
        await db.close();
        return res.status(400).json({ message: "User already exists." });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    await db.run("INSERT INTO users (uname, password) VALUES (?, ?)", [uname, hashedPassword]);
    await db.close();

    res.status(201).json({ message: "Registration successful" });
});

// Endpoint: User login
app.post("/login", async (req, res) => {
    const { uname, password } = req.body;
    if (!uname || !password) {
        return res.status(400).json({ message: "Missing required parameter." });
    }

    const db = await getDBConnection();
    const user = await db.get("SELECT uname, password FROM users WHERE uname = ?", [uname]);
    await db.close();

    if (!user) {
        return res.status(400).json({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return res.status(400).json({ message: "Password incorrect." });
    }

    const token = jwt.sign({ login: true, uname }, jwtSecret, { expiresIn: "7d" });
    res.cookie("jwt", token, { httpOnly: true, maxAge: 7 * 24 * 60 * 60 * 1000 });  // 7 days
    res.status(200).json({ message: "Login successful", redirectUrl: "/index.html" });
});

// Endpoint: Access user area
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
