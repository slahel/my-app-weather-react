import React, { useState } from "react";
import ReactAnimatedWeather from "react-animated-weather/build/ReactAnimatedWeather";
import WeatherIcon from "./WeatherIcon";
import "./Forecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);
  function getForecast(response) {
    setForecast(response.data.daily);
  }
  if (loaded) {
    return (
      <div className="Forecast">
        <div className="ForecastDay">Fri</div>
        <div className="ForecastIcon">
          <WeatherIcon code={"02d"} size={38} />
        </div>
        <div>
          <span className="ForecastMax">21</span>
          <span className="ForecastMin">12</span>
        </div>
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
