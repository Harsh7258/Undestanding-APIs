const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const AppError = require('../utils/appError');
const User = require("../models/userModel");

exports.signup = asyncHandler(async(req, res, next) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        res.status(400);
        throw new Error("User already registered!");
    }

    const userAvailable = await User.findOne({ email });
    if (userAvailable) {
        res.status(400);
        throw new Error("User already registered!");
    }

    //Hash password
    const hashedPassword = await bcrypt.hash(password, 10);
        console.log("Hashed Password: ", hashedPassword);

    const user = await User.create({
        username,
        email,
        password: hashedPassword,
    });
    console.log(`User created ${user}`);
    

    if (user) {
        res.status(201).json({ 
            status: 'success',
            data: {
                _id: user.id, 
                email: user.email 
            },
        });
    } else {
        res.status(400);
        throw new Error("User already registered!");
    }
    res.json({ message: "Register the user" });
});


exports.login = asyncHandler(async(req, res) => {
    const { email, password } = req.body;
    if(!email || !password) {
        res.status(400)
        throw new Error("Please provide Email and Password.")
    }

    const user = await User.findOne({ email });
    //compare password with hashedpassword
    const bcryptPass = await bcrypt.compare(password, user.password);
    if (user && bcryptPass) {
        const accessToken = jwt.sign(
        {
            user: {
            username: user.username,
            email: user.email,
            id: user.id,
            },
        },
        process.env.ACCESS_TOKEN_SECERT,
        { expiresIn: "15m" }
        );
        res.status(200).json({ 
            status: 'success',
            accessToken 
        });
    } else {
        res.status(401);
        throw new Error("email or password is not valid");
  }
});

exports.currentUser = asyncHandler(async(req, res) => {
    
    res.status(200).json({
        status: 'success',
        data: req.user
    });
});