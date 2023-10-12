// Import necessary modules and schemas
const { Schema, model } = require('mongoose');
const ReactionSchema = require('./Reaction');
const dateFormat = require('../utils/dateFormat');

// Define the schema for Thoughts
const ThoughtSchema = new Schema(
    {
        thoughtText: {
            type: String, // Setting type as String
            required: true, // Field is required
            minLength: 1, // Minimum length of 1
            maxLength: 280 // Maximum length of 280
        },
        createdAt: {
            type: Date, // Setting type as Date
            default: Date.now, // Default value as current date and time
            get: createdAtVal => dateFormat(createdAtVal) // Applying date format to value
        },
        username: {
            type: String, // Setting type as String
            required: true // Field is required
        },
        reactions: [ReactionSchema] // Embedding the ReactionSchema
    },
    {
        toJSON: {
            virtuals: true, // Including virtuals when document is converted to JSON
            getters: true // Applying schema's getters
        },
        id: false // Not creating an id virtual
    }
);

// Define a virtual to get the count of reactions
ThoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length; // Returning the length of reactions array
});

// Create the Thought model using ThoughtSchema
const Thought = model('Thought', ThoughtSchema);

// Export the Thought model
module.exports = Thought;
