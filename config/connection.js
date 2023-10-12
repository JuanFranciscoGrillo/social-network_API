const mongoose = require('mongoose');

// Connecting to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/social-network-api', {
    useFindAndModify: false, // Using the latest findAndModify function
    useNewUrlParser: true, // Using the new URL parser
    useUnifiedTopology: true // Using unified topology
});

// Setting useCreateIndex to true
mongoose.set('useCreateIndex', true);

// Exporting the connection
module.exports = mongoose.connection;
