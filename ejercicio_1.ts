const button = document.querySelector(".next")?.addEventListener("click", randomJoke);


function randomJoke(){
    let config = {
        headers: {
            Accept: "application/json",
        }
    };
    fetch('https://icanhazdadjoke.com/', config)
    .then((res) => res.json())
    .then((data) => {
        const joke = data.joke;
        console.log(joke)
        const randomJoke = document.querySelector(".jokes")
        if(randomJoke){
            randomJoke.innerHTML = joke
        }
    
})
}

randomJoke()