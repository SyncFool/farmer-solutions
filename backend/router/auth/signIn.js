const express = require("express");
const router = express.Router();
const User = require("../../models/User/UserDB");
const jwt = require("jsonwebtoken");
const secretKey = process.env.SECRET_KEY;

router.use(express.urlencoded({extended:true}));

router.post('/sign-in', async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ username, password });
        if (user) {
            jwt.sign({ username }, secretKey, (err, token) => {
                if (err) {
                    res.status(500).json({ error: "Error signing token" });
                } else {
                    res.status(200).json({ token });
                }
            });
        } else {
            res.status(401).json({ error: "Invalid username or password" });
        }
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
});

module.exports = router;
