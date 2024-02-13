const mongoose  = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        reuired: [true, 'error message'],
        unique: true,
        default: true,
        lowercase: true
    },
    email: {
        type: String,
        reuired: [true, 'error message']
    },
    password: {
        type: String,
        reuired: [true, 'error message']
    }
}, { timestamps: true });

const User = mongoose.model("User", userSchema);

module.exports = User;