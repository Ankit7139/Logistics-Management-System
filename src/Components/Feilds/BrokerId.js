import React from "react";
import "./Feilds.css";

export const BrokerId = () => {
  return (
    <div className="feild">
      <label htmlFor="brokerId" className="feild--label">
        BROKER ID
      </label>
      <input className="feild--input" id="brokerId" />
    </div>
  );
};
