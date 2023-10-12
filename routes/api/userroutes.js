// Import necessary modules
const router = require('express').Router(); // Importing Router from express
const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend
} = require('../../controllers/usercontroller'); // Destructuring methods from the usercontroller

// Routes for /api/users
router
    .route('/')
    .get(getAllUsers) // Route to get all users
    .post(createUser); // Route to create a new user

// Routes for /api/users/:id
router
    .route('/:id')
    .get(getUserById) // Route to get a user by ID
    .put(updateUser) // Route to update a user by ID
    .delete(deleteUser); // Route to delete a user by ID

// Routes for user's friends
router
    .route('/:userId/friends/:friendId')
    .post(addFriend) // Route to add a friend to a user's friend list
    .delete(deleteFriend); // Route to delete a friend from a user's friend list

// Exporting the configured router to be used in other parts of the application
module.exports = router;
