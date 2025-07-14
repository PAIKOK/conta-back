const express = require('express');
const router = express.Router();
const { saveContact } = require('../models/Contact');

router.post('/', async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: "All fields are required." });
    }

    try {
        const result = await saveContact({ name, email, message, createdAt: new Date() });
        res.status(201).json({ message: "Contact saved", id: result.insertedId });
    } catch (err) {
        console.error("Error:", err);
        res.status(500).json({ error: "Failed to save contact" });
    }
});

module.exports = router;
