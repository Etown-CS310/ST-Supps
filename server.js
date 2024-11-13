"use strict";

const express = require("express");
const multer = require("multer");
const sqlite3 = require('sqlite3');
const sqlite = require('sqlite');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const jwtSecret = "bb2848e5b2736a2a3685abc67981fd4a6e39c42e1ee00672e133abbb07f8cccbb4cd25";
const cookieParser = require("cookie-parser");

const app = express();
const PORT = process.env.PORT || 8080;
const DB_PATH = "my_database.db";

// tells the code to serve static files in a directory called 'public' 
app.use(express.static('public'));

app.use(cookieParser());

app.use(express.urlencoded({ extended: true })); // for application/x-www-form-urlencoded
app.use(express.json()); // for application/json
app.use(multer().none()); // for multipart/form-data (required with FormData)

app.get('/', (req, res) => {
    const token = req.cookies.jwt;

    if (token) {
        jwt.verify(token, jwtSecret, (err, decodedToken) => {
            console.log(decodedToken);

            if (err) {
                return res.status(401).json({
                    message: "Not authorized"
                });
            } else {
                return res.sendFile(__dirname + "/index.html");
            }
        })
    } else {
        return res.status(401).json({
            message: "Not authorized, token not available"
        });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });