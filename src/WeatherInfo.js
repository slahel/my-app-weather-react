import React from "react";
import "./weather.css";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <ul>
        <li>
          <h1>{props.data.city}</h1>
        </li>
        <FormattedDate date={props.data.date} />
        <li>{props.data.description}</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <div className="float-left image">
            <WeatherIcon code={props.data.icon} alt={props.data.description} />
          </div>
          <div className="float-left">{Math.round(props.data.temp)}°C</div>
        </div>
        <div className="col-6">
          <ul>
            <li>feeling : {Math.round(props.data.feeling)}°C</li>
            <li>Humidity : {Math.round(props.data.humidity)} %</li>
            <li>Wind : {Math.round(props.data.wind)} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
