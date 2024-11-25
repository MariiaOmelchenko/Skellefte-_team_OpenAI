document.getElementById("question-form").addEventListener('submit', async function(event) {
    event.preventDefault();

    const expertArea = document.getElementById("expert-area").value;
    const question = document.getElementById("question").value;

    try {
        const response = await fetch('/question', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ expertArea, question })
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);

        document.getElementById("answer-container").textContent = data.answer || 'Sorry, I do not know the answer to that question.';
    } catch (error) {
        console.error('Error:', error);
        document.getElementById("answer-container").textContent = 'An error occurred while fetching the answer.';
    }
});