var button = document
  .querySelector(".next")
  ?.addEventListener("click", randomJoke);

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

/*--------------------------------------------------Ejercicio #3------------------------------------------------------------------------------*/

type Jokes = {
  joke: any;
  score: number;
  date: string;
};

let reportAcudits: Jokes[] = [];

function scoreJokes() {
  let scoreSelect = document.querySelector("#score") as HTMLSelectElement;
  let score = parseInt(scoreSelect.value);

  randomJoke()
    .then((joke) => {
      let newJokes: Jokes = {
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
function kelvinToCelsius(kelvin : number) {
    return kelvin - 273.15;
}


function weatherAPI() {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=barcelona&appid=${API_Key}`
  )
    .then((res) => res.json())
    .then((data) => {
      const weathercity : string = (data.name = "Barcelona");
      const iconName : string = data.weather[0].icon;
      const weather : number = kelvinToCelsius(data.main.temp).toFixed(2);
      const description : string = data.weather[0].description;
      const iconUrl = `https://openweathermap.org/img/wn/${iconName}@2x.png`;
      const weather_box = document.getElementById("wheater_container");
      weather_box.innerHTML = `
        <img src="${iconUrl}" alt="tempeture_code">
        <h1>${weathercity}</h1>
        <h3>${weather} ºC</h3>
        <h2>${description}</h2>
        `;

        console.log(data)
    });

    
}

weatherAPI()