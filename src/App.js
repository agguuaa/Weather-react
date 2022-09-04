import "./App.css";
import WeatherSearch from "./WeatherSearch";
import React from "react";

export default function App() {
  return (
    <div className="App">
      <header className="container">
        <WeatherSearch />
      </header>

      <br />

      <footer>
        This project was coded by Aga and is{" "}
        <a
          href="https://github.com/agguuaa/Weather-react"
          target="_blank"
          rel="noopener noreferrer"
        >
          open-sourced on GitHub
        </a>{" "}
        and{" "}
        <a
          href="https://peaceful-pothos-09bd57.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          hosted on Netlify
        </a>
      </footer>
    </div>
  );
}
