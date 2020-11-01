import React from "react";

export default function Date(props) {
  return (
    <h1>
      <span id="date">
        <div className="Day">{props.day}</div>
        <div className="Date">{props.date}</div>
        <div className="Time">10:00</div>
      </span>
    </h1>
  );
}
