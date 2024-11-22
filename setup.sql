CREATE TABLE users(
   id             INTEGER PRIMARY KEY AUTOINCREMENT,
   uname           TEXT UNIQUE,
   password          TEXT
);

CREATE TABLE products(
   productID      INT PRIMARY KEY,
   Pname          TEXT,
   category       TEXT,
   price          INT
);

CREATE TABLE review(
   reviewID       INT AUTOINCREMENT,
   userID         TEXT,
   productID      INT,
   rating         INT,
);