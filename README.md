# E-CommBackEnd

## Description
This project is an e-commerce backend application that provides a comprehensive API for managing product data. It's built using Express.js for the server, Sequelize as the ORM, and MySQL for the database. The application allows users to perform CRUD operations on categories, products, and tags, making it a versatile solution for e-commerce data management.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [API Endpoints](#api-endpoints)
- [Demo](#demo)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/jdgiancola/E-CommBackEnd
Install dependencies:

bash
npm install
Set up your MySQL database and note your credentials.

Create a .env file in the root directory and add your MySQL username, password, and database name:

arduino
DB_NAME='ecommerce_db'
DB_USER='[Your MySQL username]'
DB_PASSWORD='[Your MySQL password]'
Usage
Start the MySQL server and create the database:
bash
mysql -u root -p
CREATE DATABASE ecommerce_db;
Seed the database:
bash
npm run seed
Start the server:
bash
npm start
Features
CRUD operations for categories, products, and tags.
Filtering products by categories and tags.
Data validation and error handling.
Easy integration with front-end applications.
API Endpoints
GET /api/categories - Retrieve all categories.
GET /api/categories/:id - Retrieve a single category by ID.
POST /api/categories - Create a new category.
PUT /api/categories/:id - Update a category.
DELETE /api/categories/:id - Delete a category.
(Include similar endpoints for products and tags)

Demo
A walkthrough video demonstrating the application can be found here.
https://drive.google.com/file/d/1V5Wqiyr84gyyEzkqOclT2mHN9vgmiUsF/view

Contributing
Contributions are welcome! Please fork the repository and submit a pull request with your changes.

Tests
To run tests, use the following command:

bash
npm test
Questions
For any questions or comments, please contact me:

Email: josephdgiancola@gmail.com
GitHub: https://github.com/jdgiancola

