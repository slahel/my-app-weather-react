import React from "react";
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
        <li>
          {" "}
          <img src={props.data.icon} alt={props.data.description} />{" "}
        </li>

        <li>Temperature : {Math.round(props.data.temp)}°C</li>
        <li>Humidity : {Math.round(props.data.humidity)} %</li>
        <li>Wind : {Math.round(props.data.wind)} km/h</li>
      </ul>
    </div>
  );
}
