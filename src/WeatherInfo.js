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
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row">
        <div className="col-2 float-left image">
          <WeatherIcon
            code={props.data.icon}
            alt={props.data.description}
            size={95}
          />
        </div>
        <div className="col-4 float-left Temp">
          <div className="Temperature">
            <span className="Temp">{Math.round(props.data.temp)}</span>
            <span className="Unit">°C </span>
          </div>
        </div>

        <div className="col-5">
          <ul>
            <li>Feels Like : {Math.round(props.data.feeling)}°C</li>
            <li>Humidity : {Math.round(props.data.humidity)} %</li>
            <li>Wind : {Math.round(props.data.wind)} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
