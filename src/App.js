import "./App.css";
import WeatherSearch from "./WeatherSearch";
import React from "react";

function App() {
  return (
    <div className="App">
      <header className="container">
        <WeatherSearch />
      </header>
      <footer>
        <a href="https://github.com/agguuaa/Weather-react">
          Github opensource code by Aga
        </a>
      </footer>
    </div>
  );
}

export default App;
