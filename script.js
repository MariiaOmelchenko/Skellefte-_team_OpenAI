document.getElementById("question-form").addEventListener('submit', async function(event) {
    event.preventDefault();

    const expert = document.getElementById("expert-area").value;
    const question = document.getElementById("question").value;

    const response = await fetch('/question', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ expert, question })
    });


    const data = await response.json();

    console.log(data);

    document.getElementById("answer-container").textContent = data || 'Sorry, I do not know the answer to that question.';
});