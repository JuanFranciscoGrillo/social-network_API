// Import necessary modules
const router = require('express').Router(); // Importing Router from express
const thoughtRoutes = require('./thoughtroutes'); // Importing routes for thoughts
const userRoutes = require('./userroutes'); // Importing routes for users

// Using thoughtRoutes when '/thoughts' endpoint is hit
router.use('/thoughts', thoughtRoutes); 

// Using userRoutes when '/users' endpoint is hit
router.use('/users', userRoutes);

// Exporting the configured router to be used in other parts of the application
module.exports = router;
