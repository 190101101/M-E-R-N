const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    number: {
        type: Number,
        required: true,
    },
    timestamps: {
        required: true,
    },
});

const User = mongoose.model('users', UserSchema);
module.exports = User;