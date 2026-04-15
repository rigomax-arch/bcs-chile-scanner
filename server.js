const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.get('/api/stocks', (req, res) => {
    // Fetch stocks logic here
    res.json([]);
});

app.get('/api/comparison', (req, res) => {
    // Fetch comparison logic here
    res.json({});
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
