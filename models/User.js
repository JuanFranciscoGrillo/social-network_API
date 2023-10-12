// Import necessary modules from mongoose
const { Schema, model } = require('mongoose');

// Define the schema for Users
const UserSchema = new Schema(
    {
        username: {
            type: String, // Setting the type as String
            unique: true, // Ensuring the username is unique
            required: true, // Making this field required
            trim: true // Removing any whitespaces
        },
        email: {
            type: String, // Setting the type as String
            required: true, // Making this field required
            unique: true, // Ensuring the email is unique
            match: [/.+\@.+\..+/, 'Must match an email address!'] // Validating the email format
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId, // Referring to ObjectId of thoughts
                ref: 'Thought' // Establishing reference to Thought model
            }
        ],
        friends: [
            {
                type: Schema.Types.ObjectId, // Referring to ObjectId of friends (users)
                ref: 'User' // Establishing reference to User model itself
            }
        ]
    },
    {
        toJSON: {
            virtuals: true // Including virtuals when the document is converted to JSON
        },
        id: false // Not creating an id virtual
    }
);

// Define a virtual to get the count of friends
UserSchema.virtual('friendCount').get(function() {
    return this.friends.length; // Returning the length of friends array
});

// Create the User model using UserSchema
const User = model('User', UserSchema);

// Export the User model
module.exports = User;
