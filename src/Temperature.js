import React, { useState } from "react";

export default function Temperature(props) {
  const [unit, setUnit] = useState("celsius");

  function showFar(event) {
    event.preventDefault();
    setUnit(`fahreinheit`);
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit(`celsius`);
  }
  function Fahreinheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <div className="Temperature">
        <span className="Temp">{Math.round(props.celsius)}</span>
        <span className="Unit">
          °C |{" "}
          <a href="/" onClick={showFar}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="Temperature">
        <span className="Temp">{Math.round(Fahreinheit())}</span>
        <span className="Unit">
          <a href="/" onClick={showCelsius}>
            °C
          </a>{" "}
          | °F
        </span>
      </div>
    );
  }
}
