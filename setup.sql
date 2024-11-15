CREATE TABLE users(
   id             INTEGER PRIMARY KEY AUTOINCREMENT,
   uname           TEXT UNIQUE,
   password          TEXT
);