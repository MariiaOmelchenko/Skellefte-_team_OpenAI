const express = require('express');
const app = express();
const port = 3000;

// Middleware to handle JSON data
app.use(express.json());

// Endpoint for questions
app.post('/question', (req, res) => {
    const { expertArea, question } = req.body;

    // Check that data exists
    if (!expertArea || !question) {
        return res.status(400).json({ error: "Please provide both expert area and question." });
    }

    // Hardcoded answers based on expert area
    let answer = "";
    switch (expertArea.toLowerCase()) {
        case "shellscript":
            answer = "To debug your shell script, use the command `set -x`.";
            break;
        case "grafikkort":
            answer = "To improve your graphics card performance, update the drivers.";
            break;
        case "ciscoroutrar":
            answer = "Use the command `show running-config` to see the current router configuration.";
            break;
        default:
            answer = "I'm not familiar with that expert area.";
    }

    // Return the answer
    res.json({ answer });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
