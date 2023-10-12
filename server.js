// Import necessary dependencies and modules
const express = require('express');
const routes = require('./routes');
const db = require('./config/connection');

// Create an instance of the Express application
const app = express();

// Set the port for the server
const PORT = process.env.PORT || 3001;

// Middleware to parse JSON request bodies
app.use(express.json());

// Middleware to parse URL-encoded data
app.use(express.urlencoded({ extended: true }));

// Use the routes defined in the routes directory
app.use(routes);

// Connect to the database and start the server
// Once the database connection is open, start the server
db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`App running on port ${PORT}!`); // Log the port where the app is running
    });
});
