var button = document.querySelector(".next")?.addEventListener("click", randomJoke);


function randomJoke(){
    let config = {
        headers: {
            Accept: "application/json",
        }
    };

    let jokes = fetch('https://icanhazdadjoke.com/', config)
    .then((res) => res.json())
    .then((data) => {
        const joke = data.joke;
        console.log(joke)
        const randomJoke = document.querySelector(".jokes")
        if(randomJoke){
            randomJoke.innerHTML = joke
        }
    
})

return jokes
}

randomJoke()

/*--------------------------------------------------Ejercicio 3------------------------------------------------------------------------------*/

type Jokes = {
    joke: any,
    score: number,
    date: string,
};

let reportAcudits: Jokes[]  = []


function scoreJokes() {
    let scoreSelect = document.querySelector('#score') as HTMLSelectElement;
    let score = parseInt(scoreSelect.value)

    randomJoke().then((joke) => {
            console.log('linea 42', joke);

            let newJokes: Jokes = {
                joke: joke,
                score: score,
                date: new Date().toISOString()
            };

            reportAcudits.push(newJokes);

            console.log('linea de nuevos chistes', reportAcudits);
        })
        .catch((error) => {
            console.error('Error getting joke:', error);
        });
   
}

scoreJokes()