require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/api-key', (req, res) => {
    res.json({ apiKey: process.env.GOOGLE_API_KEY });
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
