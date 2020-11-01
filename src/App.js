import React from "react";
import "./App.css";
import Search from "./Search";
import CurrentWeather from "./CurrentWeather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Search />
        <CurrentWeather />
      </div>
    </div>
  );
}

