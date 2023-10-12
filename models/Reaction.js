// Import necessary modules from mongoose and a date formatting utility
const { Schema, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

// Define a schema for Reactions
const ReactionSchema = new Schema(
    {
        // Define properties of a reaction
        reactionId: {
            type: Schema.Types.ObjectId, // Setting the type to ObjectId
            default: () => new Types.ObjectId() // Default value is a new ObjectId
        },
        reactionBody: {
            type: String, // Setting the type to String
            required: true, // This field is required
            maxLength: 280 // Maximum length of 280 characters
        },
        username: {
            type: String, // Setting the type to String
            required: true // This field is required
        },
        createdAt: {
            type: Date, // Setting the type to Date
            default: Date.now, // Default value is the current date and time
            get: (createdAtVal) => dateFormat(createdAtVal) // Formatting the date value
        }
    },
    {
        toJSON: {
            getters: true // Enabling getters to allow the usage of virtual properties and transformation of data
        }
    }
);

// Exporting the ReactionSchema to be used in other parts of the application
module.exports = ReactionSchema;
