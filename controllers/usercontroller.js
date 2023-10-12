const { User } = require('../models');

const userController = {
    getAllUsers(req, res) {
        User.find({})
        .then(userData => res.json(userData))
        .catch(err => res.status(400).json(err));
    },
    getUserById(req, res) {
        User.findById(req.params.id)
        .populate({ path: 'thoughts', select: '-__v' })
        .select('-__v')
        .then(userData => res.json(userData))
        .catch(err => res.status(400).json(err));
    },
    createUser(req, res) {
        User.create(req.body)
        .then(userData => res.json(userData))
        .catch(err => res.status(400).json(err));
    },
    updateUser(req, res) {
        User.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then(userData => {
            if (!userData) {
                res.status(404).json({ message: 'No user found with this ID!' });
                return;
            }
            res.json(userData);
        })
        .catch(err => res.status(400).json(err));
    },
    deleteUser(req, res) {
        User.findByIdAndDelete(req.params.id)
        .then(userData => {
            if (!userData) {
                res.status(404).json({ message: 'No user found with this ID!' });
                return;
            }
            res.json(userData);
        })
        .catch(err => res.status(400).json(err));
    },
    addFriend(req, res) {
        User.findByIdAndUpdate(
            req.params.userId,
            { $addToSet: { friends: req.params.friendId } },
            { new: true }
        )
        .then(userData => {
            if (!userData) {
                res.status(404).json({ message: 'No user found with this ID!' });
                return;
            }
            res.json(userData);
        })
        .catch(err => res.status(400).json(err));
    },
    deleteFriend(req, res) {
        User.findByIdAndUpdate(
            req.params.userId,
            { $pull: { friends: req.params.friendId } },
            { new: true }
        )
        .then(userData => {
            if (!userData) {
                res.status(404).json({ message: 'No user found with this ID!' });
                return;
            }
            res.json(userData);
        })
        .catch(err => res.status(400).json(err));
    }
};

module.exports = userController;
