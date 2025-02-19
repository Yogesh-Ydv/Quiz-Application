
const questions = [
    { q: "Capital of India?", a: ["Lucknow", "Kathmandu", "New Delhi", "Indore"], c: 2 },
    { q: "Silicon City of India?", a: ["Noida", "Bengaluru", "Hyderabad", "Pune"], c: 1 },
    { q: "Who discovers C language?", a: ["Guido Van Rossum", "Charles", "Dennis Ritchie", "Bjarne Stroustrup"], c: 2 },
    { q: "GPU stands for?", a: ["General Processing Unit", "Graphics Processing Unit", "Gaming Processing Unit", "Generation Processing Unit"], c: 1 },
    { q: "What's the Height of Mount Everest?", a: ["8,849 m", "8,749 m", "8,949 m", "8,600 m"], c: 0 },
    { q: "Speed of light?", a: ["300,000 km/s", "150,000 km/s", "450,000 km/s", "600,000 km/s"], c: 0 },
    { q: "NPU stands for?", a: ["Neural Processing Unit", "Natural Processing Unit", "Nilamber Pitamber University", "Neon Processing Unit"], c: 0 },
    { q: "Capital of Uttar Pradesh?", a: ["Varanasi", "Lucknow", "Kanpur", "Bhopal"], c: 1 },
    { q: "How many continents?", a: ["5", "6", "7", "8"], c: 2 },
    { q: "Spice Garden of India?", a: ["Kerala", "Assam", "Karnataka", "Manipur"], c: 0 }
];

let current = 0, score = 0, time = 20, timer;

function startTimer() {
    clearInterval(timer);
    time = 20;
    document.getElementById("time").textContent = time;
    timer = setInterval(() => {
        time--;
        document.getElementById("time").textContent = time;
        if (time === 0) {
            clearInterval(timer);
            disableOptions();
            document.getElementById("next").disabled = false;
        }
    }, 1000);
}

function loadQuestion() {
    clearInterval(timer);
    if (current < questions.length) {
        startTimer();
        const q = questions[current];
        document.getElementById("question").textContent = q.q;
        document.getElementById("options").innerHTML = q.a.map((a, i) =>
            `<button onclick="checkAnswer(this, ${i})">${a}</button>`).join('');
        document.getElementById("next").disabled = true;
    } else {
        document.querySelector(".quiz-container").innerHTML = `<h2>Quiz Over!</h2><p>Score: ${score}/${questions.length}</p>`;
    }
}

function checkAnswer(btn, i) {
    clearInterval(timer);
    disableOptions();
    btn.style.backgroundColor = i === questions[current].c ? 'green' : 'red';
    if (i === questions[current].c) score++;
    document.getElementById("next").disabled = false;
}

function disableOptions() {
    document.querySelectorAll(".options button").forEach(b => b.disabled = true);
}

document.getElementById("next").addEventListener("click", () => {
    current++;
    loadQuestion();
});

loadQuestion();
