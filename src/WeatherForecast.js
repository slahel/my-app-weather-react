import React, { useState } from "react";
import "./Forecast.css";
import axios from "axios";
import ForecastDay from "./ForecastDay";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);
  function getForecast(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }
  if (loaded) {
    console.log(forecast);
    return (
      <div className="Forecast">
        <ForecastDay data={forecast[0]} />
      </div>
    );
  } else {
    let apiKey = `d327f9521127853e671914b6a74e0659`;
    let lat = props.coord.lat;
    let lon = props.coord.lon;
    let urlApi = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={part}&appid=${apiKey}&units=metric`;
    axios.get(urlApi).then(getForecast);
    return null;
  }
}
