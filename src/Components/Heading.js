import React from "react";
import "../App.css";

export const Heading = () => {
  return (
    <div className="header">
      <h1>Loads</h1>
      <select className="time--period">
        <option>Last 30 Days</option>
        <option>Last 15 Days</option>
        <option>Last 7 Days</option>
      </select>
      <ul className="issues">
        <li className="warnings" style={{ color: "red" }}>
          Warnings 3
        </li>
        <li className="warnings" style={{ color: "yellow" }}>
          Drivers Not Set 3
        </li>
        <li className="warnings" style={{ color: "yellow" }}>
          Open Detention 3
        </li>
        <li className="warnings">No Next Load 0</li>
      </ul>
    </div>
  );
};
