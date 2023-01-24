import React from "react";
import "./Feilds.css";

export const Date = () => {
  return (
    <div className="feild">
      <label htmlFor="date" className="feild--label">
        DATE
      </label>
      <input className="feild--input" id="date" />
      {/* type="date" */}
    </div>
  );
};
