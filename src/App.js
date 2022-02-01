import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="London" />
        <footer>
          Code by Stephanie Lahellec, check the opensource on{" "}
          <a
            href="https://github.com/slahel/my-app-wether-react"
            target="_blank"
          >
            Github
          </a>
        </footer>
      </div>
    </div>
  );
}
