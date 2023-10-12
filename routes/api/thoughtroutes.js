// Import necessary modules
const router = require('express').Router(); // Importing Router from express
const {
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction
} = require('../../controllers/thoughtcontroller'); // Destructuring methods from the thoughtcontroller

// Routes for /api/thoughts
router
    .route('/')
    .get(getAllThoughts) // Route to get all thoughts
    .post(createThought); // Route to create a new thought

// Routes for /api/thoughts/:id
router
    .route('/:id')
    .get(getThoughtById) // Route to get a single thought by ID
    .put(updateThought) // Route to update a thought by ID
    .delete(deleteThought); // Route to delete a thought by ID

// Routes for reactions
router
    .route('/:thoughtId/reactions')
    .post(addReaction); // Route to add a reaction to a thought

router
    .route('/:thoughtId/reactions/:reactionId')
    .delete(deleteReaction); // Route to delete a reaction from a thought by ID

// Exporting the configured router to be used in other parts of the application
module.exports = router;
