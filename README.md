# Skellefte-_team_OpenAI
 Pontus, Mariia, Faisal

 AI Question Helper
Beskrivning
AI Question Helper är en enkel webbsida där användare kan ställa frågor inom tre expertområden: Shellscript, Grafikkort, och Ciscoroutrar. Svaren genereras av en Node.js-server och visas direkt på sidan.

Installation och körning
Krav
Node.js och npm installerat på din dator.
Steg-för-steg:
Klona detta repo:

bash
Copy code
git clone <repo-url>
cd ai-question-server
Installera nödvändiga beroenden:

bash
Copy code
npm install
Starta servern:

bash
Copy code
node server.js
Öppna webbsidan:

Gå till index.html i din webbläsare eller kör en lokal server med till exempel VS Code Live Server.
Användning
Välj ett expertområde i dropdown-menyn:

Shellscript
Grafikkort
Ciscoroutrar
Skriv in din fråga i textfältet.

Klicka på "Skicka".

Svaret visas i rutan nedanför formuläret.

Tekniker som används
Frontend: HTML, CSS, JavaScript
Backend: Node.js, Express.js
Kommunikation: REST API
Exempel på frågor
Shellscript: "Hur felsöker jag ett script?"
Grafikkort: "Hur kan jag förbättra prestandan?"
Ciscoroutrar: "Hur ser jag routerkonfigurationen?"
Licens
Detta projekt är licensierat under MIT-licensen.

Backend och API Endpoint
Backend
Projektets backend är byggt med Node.js och Express.js. Servern hanterar inkommande förfrågningar från frontend, bearbetar data, och returnerar relevanta svar baserat på det valda expertområdet.

Endpoint
Backend har ett enkelt POST-endpoint som tar emot frågor från klienten.

URL: /api/question

Metod: POST

Headers:

Content-Type: application/json
Body (exempel):

json
Copy code
{
    "expertArea": "shellscript",
    "question": "Hur felsöker jag ett script?"
}
Svar (exempel):

json
Copy code
{
    "answer": "För att felsöka ditt shellscript, använd kommandot `set -x`."
}
Funktionalitet
Baserat på det valda expertområdet (expertArea), returnerar servern ett fördefinierat svar.
Om antingen expertArea eller question saknas returnerar servern ett felmeddelande med statuskoden 400.