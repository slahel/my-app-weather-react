import axios from "axios";
import React, { useState } from "react";
import "./weather.css";
import WeatherInfo from "./WeatherInfo";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weather, setWeather] = useState({ loaded: false });

  function showWeather(response) {
    setWeather({
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      icon: response.data.weather[0].icon,
      description: response.data.weather[0].description,
      temp: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      feeling: response.data.main.feels_like,
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
    <form className="weatherForm " onSubmit={getWeather}>
      <input
        type="text"
        placeholder="enter a city"
        onChange={getCity}
        className="input"
      />
      <button type="Submit" className="Button">
        Search
      </button>
    </form>
  );
  if (weather.loaded) {
    return (
      <div className="Weather">
        {form}
        <WeatherInfo data={weather} />
      </div>
    );
  } else {
    return <div className="Weather">{form}</div>;
  }
}
