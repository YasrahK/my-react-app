import React from "react";

export default function Search() {
  return (
    <div className="Search">
      <div ClassName="weather-app">
        <form id="search-city">
          <div class="row">
            <div class="col-8">
              <input
                type="text"
                placeholder="Enter a city..."
                autocomplete="off"
                id="input-place"
                class="form-control mb-3"
              />
            </div>
            <div class="col-4">
              <input
                type="submit"
                value="search"
                class="btn btn-primary mb-3"
                id="submit-city"
              />
            </div>
          </div>
        </form>
      </div>
      <button type="button" class="btn btn-primary" id="current-city">
        Current pin📍
      </button>
      <div class="c-f-buttons weather-temperature">
        <button type="button" class="btn btn-info mb-3" id="celcius">
          °C
        </button>
        <button
          type="button"
          class="btn btn-info btn-fahrenheit mb-3"
          id="fahrenheit"
        >
          °F
        </button>
      </div>
    </div>
  );
}
