CREATE TABLE users (
   id INT AUTO_INCREMENT PRIMARY KEY,
   uname VARCHAR(255) UNIQUE,
   password VARCHAR(255)
);

CREATE TABLE products (
   productID INT PRIMARY KEY AUTO_INCREMENT,
   Pname VARCHAR(255),
   category VARCHAR(255),
   price INT
);

CREATE TABLE review (
   reviewID INT AUTO_INCREMENT PRIMARY KEY,
   userID INT,
   productID INT,
   rating INT,
   FOREIGN KEY (userID) REFERENCES users(id),
   FOREIGN KEY (productID) REFERENCES products(productID)
);
