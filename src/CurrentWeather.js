import React from "react";
import Date from "./Date";
import "./style.css";
export default function CurrentWeather() {
  return (
    <div className="CurrentWeather">
      <div className="current-display mb-3">
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col">
                <img
                  src="https://img.icons8.com/wired/64/000000/sun.png"
                  alt="currentweather"
                  id="icon"
                />
              </div>
              <div className="col">
                <h1>
                  <span id="city">Chicago</span>
                  <br />
                  <span>
                    <small id="description">Cloudy</small>
                    <br />
                  </span>
                  <span id="temp-reading">24C</span>°
                </h1>
              </div>
              <div className="col">
                <Date day="Saturday" date="10/10/2020" hour="11:00" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}
