import React from "react";
import "./weather.css";
import FormattedDate from "./FormattedDate";

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
          {" "}
          <img
            src={props.data.icon}
            alt={props.data.description}
            className="image"
          />{" "}
          <span>{Math.round(props.data.temp)}°C</span>
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
