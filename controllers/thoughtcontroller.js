const { Thought, User } = require('../models');

const thoughtController = {
    getAllThoughts(req, res) {
        Thought.find({})
        .then(thoughtData => res.json(thoughtData))
        .catch(err => res.status(400).json(err));
    },
    getThoughtById(req, res) {
        Thought.findById(req.params.id)
        .then(thoughtData => res.json(thoughtData))
        .catch(err => res.status(400).json(err));
    },
    createThought(req, res) {
        Thought.create(req.body)
        .then(thoughtData => {
            return User.findByIdAndUpdate(
                { _id: req.body.userId },
                { $push: { thoughts: thoughtData._id } },
                { new: true }
            );
        })
        .then(userData => {
            if (!userData) {
                res.status(404).json({ message: 'No user found with this ID!' });
                return;
            }
            res.json(userData);
        })
        .catch(err => res.json(err));
    },
    updateThought(req, res) {
        Thought.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then(thoughtData => {
            if (!thoughtData) {
                res.status(404).json({ message: 'No thought found with this ID!' });
                return;
            }
            res.json(thoughtData);
        })
        .catch(err => res.status(400).json(err));
    },
    deleteThought(req, res) {
        Thought.findByIdAndDelete(req.params.id)
        .then(thoughtData => {
            if (!thoughtData) {
                res.status(404).json({ message: 'No thought found with this ID!' });
                return;
            }
            res.json(thoughtData);
        })
        .catch(err => res.status(400).json(err));
    },
    addReaction(req, res) {
        Thought.findByIdAndUpdate(
            req.params.thoughtId,
            { $push: { reactions: req.body } },
            { new: true }
        )
        .then(thoughtData => {
            if (!thoughtData) {
                res.status(404).json({ message: 'No thought found with this ID!' });
                return;
            }
            res.json(thoughtData);
        })
        .catch(err => res.status(400).json(err));
    },
    deleteReaction(req, res) {
        Thought.findByIdAndUpdate(
            req.params.thoughtId,
            { $pull: { reactions: { reactionId: req.body.reactionId } } },
            { new: true }
        )
        .then(thoughtData => {
            if (!thoughtData) {
                res.status(404).json({ message: 'No thought found with this ID!' });
                return;
            }
            res.json(thoughtData);
        })
        .catch(err => res.status(400).json(err));
    }
};

module.exports = thoughtController;
