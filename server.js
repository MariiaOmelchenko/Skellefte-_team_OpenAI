require('dotenv').config();

const express = require('express');
const cors = require('cors');
const { Configuration, OpenAIApi } = require('openai');

const app = express();
const port = 3005;

// OpenAI API configuration
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY, // Din OpenAI API-nyckel från .env-filen
});

const openai = new OpenAIApi(configuration);

// Middleware to handle JSON data
app.use(express.json());

// Enable CORS with specific options
app.use(cors());

// Endpoint for questions
app.post('/question', async (req, res) => {
    const { expertArea, question } = req.body;

    // Kontrollera att båda fälten finns
    if (!expertArea || !question) {
        return res.status(400).json({ error: "Please provide both expert area and question." });
    }

    try {
        // Bygg prompt och gör API-anrop
        const prompt = `You are an expert in ${expertArea}. Please answer the following question: ${question}`;
        const response = await openai.createCompletion({
            model: 'text-davinci-003', // Ange OpenAI-modellen
            prompt: prompt,
            max_tokens: 100,
            temperature: 0.7, // Kontroll av slumpmässighet
        });

        // Extrahera svaret från API-responsen
        const answer = response.data.choices[0].text.trim();
        res.json({ answer });
    } catch (error) {
        console.error("Error with OpenAI API:", error.message);
        res.status(500).json({ error: "An error occurred while processing your request." });
    }
});

// Starta servern
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
