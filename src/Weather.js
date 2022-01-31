import axios from "axios";
import React, { useState } from "react";
import "./weather.css";

export default function Weather() {
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({});

  function showWeather(response) {
    setLoaded(true);
    setWeather({
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
      temp: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
    });
    console.log(response.data);
  }

  function getWeather(event) {
    event.preventDefault();
    let apiKey = `d327f9521127853e671914b6a74e0659`;
    let urlApi = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(urlApi).then(showWeather);
  }

  function getCity(event) {
    setCity(event.target.value);
  }
  let form = (
    <form className="weatherForm" onSubmit={getWeather}>
      <input type="text" placeholder="enter a city" onChange={getCity} />
      <button type="Submit">Search</button>
    </form>
  );
  if (loaded) {
    return (
      <div className="Weather">
        <h1>Weather App</h1>
        {form}
        <ul>
          <li>
            {" "}
            <img src={weather.icon} alt={weather.description} />{" "}
          </li>
          <li>{weather.description}</li>
          <li>Temperature : {Math.round(weather.temp)}°C</li>
          <li>Humidity : {Math.round(weather.humidity)} %</li>
          <li>Wind : {Math.round(weather.wind)} km/h</li>
        </ul>
      </div>
    );
  } else {
    return (
      <div className="Weather">
        <h1>Weather App</h1>
        {form}
      </div>
    );
  }
}
