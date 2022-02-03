import axios from "axios";
import React, { useState } from "react";
import "./weather.css";
import FormattedDate from "./FormattedDate";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weather, setWeather] = useState({ loaded: false });

  function showWeather(response) {
    setWeather({
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
      temp: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      loaded: true,
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
      <input
        type="text"
        placeholder="enter a city"
        onChange={getCity}
        className="col-6"
      />
      <button type="Submit">Search</button>
    </form>
  );
  if (weather.loaded) {
    return (
      <div className="Weather">
        {form}
        <ul>
          <li>
            <h1>{weather.city}</h1>
          </li>
          <FormattedDate date={weather.date} />
          <li>{weather.description}</li>
          <li>
            {" "}
            <img src={weather.icon} alt={weather.description} />{" "}
          </li>

          <li>Temperature : {Math.round(weather.temp)}°C</li>
          <li>Humidity : {Math.round(weather.humidity)} %</li>
          <li>Wind : {Math.round(weather.wind)} km/h</li>
        </ul>
      </div>
    );
  } else {
    return <div className="Weather">{form}</div>;
  }
}
