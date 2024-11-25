const express = require('express');
const app = express();
const port = 3000;

// Middleware för att hantera JSON-data
app.use(express.json());

// Endpoint för frågor
app.post('/api/question', (req, res) => {
    const { expertArea, question } = req.body;

    // Kontrollera att data finns
    if (!expertArea || !question) {
        return res.status(400).json({ error: "Vänligen ange både expertområde och fråga." });
    }

    // Hårdkodade svar baserat på expertområde
    let answer = "";
    switch (expertArea.toLowerCase()) {
        case "shellscript":
            answer = "För att felsöka ditt shellscript, använd kommandot `set -x`.";
            break;
        case "grafikkort":
            answer = "För att förbättra ditt grafikkorts prestanda, uppdatera drivrutinerna.";
            break;
        case "ciscoroutrar":
            answer = "Använd kommandot `show running-config` för att se aktuell routerkonfiguration.";
            break;
        default:
            answer = "Jag är tyvärr inte bekant med det expertområdet.";
    }

    // Returnera svaret
    res.json({ answer });
});

// Starta servern
app.listen(port, () => {
    console.log(`Server körs på http://localhost:${port}`);
});
