const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { connectDB } = require('./config/database');
const contactRoutes = require('./routes/contacts');

const app = express();
const port = process.env.PORT || 3000;

// ✅ CORS setup to allow both local and deployed frontend
const corsOptions = {
    origin: [
        'http://127.0.0.1:5500',               // for local testing
        'https://contaactjh.netlify.app'       // your deployed frontend
    ],
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type'],
};

app.use(cors(corsOptions)); // Apply CORS middleware
app.use(express.json());    // Parse JSON bodies

// ✅ Mount your routes
app.use('/api/contact', contactRoutes);

// ✅ Connect to MongoDB and start server
connectDB().then(() => {
    app.listen(port, () => {
        console.log(`🚀 Server running on http://localhost:${port}`);
    });
});
