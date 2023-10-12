// Import the express Router
const router = require('express').Router();

// Import the API routes
const apiRoutes = require('./api');

// Use the API routes when the path starts with '/api'
router.use('/api', apiRoutes);

// Export the router for use in other parts of the application
module.exports = router;
.