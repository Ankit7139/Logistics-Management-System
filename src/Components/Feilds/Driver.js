import React from "react";
import "./Feilds.css";
export const Driver = () => {
  return (
    <div className="feild">
      <label htmlFor="driver" className="feild--label">
        DRIVER
      </label>
      <input className="feild--input" id="driver" />
    </div>
  );
};
