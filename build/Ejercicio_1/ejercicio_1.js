"use strict";
var _a;
var button = (_a = document.querySelector(".next")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", randomJoke);
function randomJoke() {
    let config = {
        headers: {
            Accept: "application/json",
        }
    };
    fetch('https://icanhazdadjoke.com/', config)
        .then((res) => res.json())
        .then((data) => {
        const joke = data.joke;
        console.log(joke);
        const randomJoke = document.querySelector(".jokes");
        if (randomJoke) {
            randomJoke.innerHTML = joke;
        }
    });
}
randomJoke();
/*
type Jokes = {
    joke: string,
    score: number,
    date: string,
};

let reportAcudits: Jokes[]  = []


function scoreJokes() {
    let scoreSelect = document.querySelector('#score') as HTMLSelectElement;
    let score = parseInt(scoreSelect.value)

    let joke = randomJoke(); // Llamada síncrona a randomJoke`

    console.log(joke);

    let newJokes: Jokes = {
        joke: joke,
        score: score,
        date: new Date().toISOString()
    };
   
    reportAcudits.push(newJokes);

    console.log(reportAcudits);
   
}

scoreJokes()*/ 
