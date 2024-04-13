// const url =
//   "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "ed200b404emsh84c99d03e3f87a1p18d12ejsn4e47bb597c40",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

const cityName = document.getElementById("cityName");
const cloud_pct = document.getElementById("cloud_pct");
const temp = document.getElementById("temp");
const feels_like = document.getElementById("feels_like");
const humidity = document.getElementById("humidity");
const min_temp = document.getElementById("min_temp");
const max_temp = document.getElementById("max_temp");
const wind_speed = document.getElementById("wind_speed");
const wind_degrees = document.getElementById("wind_degrees");
const sunrise = document.getElementById("sunrise");
const sunset = document.getElementById("sunset");

const getWeather = async (city) => {
  try {
    cityName.innerHTML = city;
    const response = await fetch("https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city, options);
    const data = await response.json(); // Parse response as JSON
    console.log(data);

    // Access data and update HTML elements
    cloud_pct.innerHTML = data.cloud_pct;
    temp.innerHTML = data.temp;
    feels_like.innerHTML = data.feels_like;
    humidity.innerHTML = data.humidity;
    min_temp.innerHTML = data.min_temp;
    max_temp.innerHTML = data.max_temp;
    wind_speed.innerHTML = data.wind_speed;
    wind_degrees.innerHTML = data.wind_degree;
    sunrise.innerHTML = data.sunrise;
    sunset.innerHTML = data.sunset;
  } catch (error) {
    console.error(error);
  }
};

const submitButton = document.getElementById("Submit"); // Assuming Submit is the ID of the submit button
const cityInput = document.getElementById("city"); // Assuming city is the ID of the input field for city

submit.addEventListener("click", (e) => {
   e.preventDefault();
   getWeather(cityInput.value);
});

getWeather("Delhi");
