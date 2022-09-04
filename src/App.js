import "./App.css";
import WeatherSearch from "./WeatherSearch";
import React from "react";

export default function App() {
  return (
    <div className="App">
      <header className="container">
        <WeatherSearch />
      </header>
      <footer>
        This project was coded by Aga and is{" "}
        <a
          href="https://github.com/wecodeschool/react-weather-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          open-sourced on GitHub
        </a>{" "}
        and{" "}
        <a
          href="https://suspicious-beaver-111c4d.netlify.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          hosted on Netlify
        </a>
      </footer>
    </div>
  );
}
