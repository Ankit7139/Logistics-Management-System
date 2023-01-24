import React from "react";
import "./Feilds.css";

export const Pickup = () => {
  return (
    <div className="feild">
      <label htmlFor="pickup" className="feild--label">
        PICKUP
      </label>
      <input className="feild--input" id="pickup" />
    </div>
  );
};
