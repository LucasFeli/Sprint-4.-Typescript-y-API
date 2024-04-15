"use strict";
var _a;
var button = (_a = document
    .querySelector(".next")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", randomJoke);
function randomJoke() {
    let config = {
        headers: {
            Accept: "application/json",
        },
    };
    let jokes = fetch("https://icanhazdadjoke.com/", config)
        .then((res) => res.json())
        .then((data) => {
        const joke = data.joke;
        console.log(joke);
        const randomJoke = document.querySelector(".jokes");
        if (randomJoke) {
            randomJoke.innerHTML = joke;
        }
    });
    return jokes;
}
randomJoke();
let reportAcudits = [];
function scoreJokes() {
    let scoreSelect = document.querySelector("#score");
    let score = parseInt(scoreSelect.value);
    randomJoke()
        .then((joke) => {
        let newJokes = {
            joke: joke,
            score: score,
            date: new Date().toISOString(),
        };
        reportAcudits.push(newJokes);
    })
        .catch((error) => {
        console.error("Error getting joke:", error);
    });
}
scoreJokes();
/*--------------------------------------------------Ejercicio #4------------------------------------------------------------------------------*/
//funcion para convertir la temperatura kelvin celsius
function kelvinToCelsius(kelvin) {
    return kelvin - 273.15;
}
function weatherAPI() {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=barcelona&appid=${API_Key}2`)
        .then((res) => res.json())
        .then((data) => {
        const weathercity = (data.name = "Barcelona");
        const iconName = data.weather[0].icon;
        const weather = kelvinToCelsius(data.main.temp).toFixed(2);
        const description = data.weather[0].description;
        const iconUrl = `https://openweathermap.org/img/wn/${iconName}@2x.png`;
        const weather_box = document.getElementById("wheater_container");
        weather_box.innerHTML = `
        <img src="${iconUrl}" alt="tempeture_code">
        <h1>${weathercity}</h1>
        <h3>${weather} ºC</h3>
        <h2>${description}</h2>
        `;
        console.log(data);
    });
}
weatherAPI();
