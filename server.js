const express = require('express');
const app = express();
const port = 5000;

// Middleware to handle JSON data
app.use(express.json());

// Simple API endpoint
app.get('/', (req, res) => {
  res.send('Welcome to the Smart Regenerative Braking Dashboard Backend!');
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

