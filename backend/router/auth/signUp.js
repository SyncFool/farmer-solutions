const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = require("../../models/User/UserDB");
router.use(express.urlencoded({extended:true}));

router.post('/sign-up', async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const newUser = await User.create({ username, email, password });
        res.status(201).json(newUser); // Send the newly created user back as JSON
    } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).send("Internal Server Error"); // Handle error appropriately
    }
});


module.exports = router;